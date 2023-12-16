"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
const FormDataSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer",
  }),
  amount: z.coerce.number().gt(0, { message: "Please enter a valid amount" }),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});
const CreateInvoice = FormDataSchema.omit({ id: true, date: true });
const UpdateInvoice = FormDataSchema.omit({ id: true, date: true });

export type State = {
  message: string | null;
  errors: { customerId?: string[]; amount?: string[] };
};
export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  const date = new Date().toISOString().split("T")[0];
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  try {
    await sql`
        INSERT INTO invoices (customer_id, amount, status, date) VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;

    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
  } catch (e) {
    return { message: "Error creating invoice" };
  }
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validationFields = UpdateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Update Invoice.",
    };
  }
  const { customerId, amount, status } = validationFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status} WHERE id = ${id}
    `;

    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
  } catch (e) {
    return { message: "Error updating invoice" };
  }
}

export async function deleteInvoice(id: string) {
  try {
    await sql`
        DELETE FROM invoices WHERE id = ${id}
        `;

    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
  } catch (e) {
    return { message: "Error deleting invoice" };
  }
}
export async function authenticate(
  prevStatus: string | null,
  formData: FormData,
) {
  try {
    console.log(formData);
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
}
export async function updatePdf(
  url: string,
  user_id: string,
  module_id: number,
) {
  try {
    console.log(user_id);
    const pdfData = await sql`
        SELECT * FROM pdfs WHERE user_id = ${user_id} AND module_id = ${module_id}
        `;
    if (pdfData.rows.length > 0) {
      await sql`
            UPDATE pdfs  set path = ${url} WHERE user_id = ${user_id} AND module_id = ${module_id}
            `;
    } else {
      await sql`
            INSERT INTO pdfs  (user_id, module_id, path) VALUES (${user_id}, ${module_id}, ${url})
            `;
    }
  } catch (e) {
    console.log(e);
    return { message: "Error updating invoice" };
  }
}
