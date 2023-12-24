// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  env: string;
  pdf?: any;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: "pending" | "paid";
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: "pending" | "paid";
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type UserFormattedTable = {
  id: string;
  name: string;
  email: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: "pending" | "paid";
};

export type UserPerformance = {
  user_id: string;
  time_on_platform_seconds: number;
  time_watching_videos_seconds: number;
  interactions_count: number;
  test_attempts_count: number;
  average_test_score: number;
  increase_activity: boolean;
  login_count: number;
};

export type UserModules = {
  user_id: string;
  module_id: string;
  completed: boolean;
  added_comments: string;
  added_likes: boolean;
};

export type UserTestAttempts = {
  attempt_id: number;
  user_id: string;
  module_id: string;
  score: number;
  attempts_count: number;
  timestamp: string;
};

export type ModuleResult = {
  user_id: string;
  module_id: string;
  score: number;
  timestamp: string;
};

export type Pdf = {
  id: string;
  user_id: string;
  module_id: string;
  path: string;
  timestamp: string;
};

export type Choice = {
  id: string;
  text: string;
  answer: boolean;
};

export type Question = {
  choices: Choice[];
  question: string;
};

export type Goal = {
  goals: string[];
};

export type Module = {
  id: number;
  video: string;
  title: string;
  description: string;
  questions: Question[];
  goals: Goal;
};
