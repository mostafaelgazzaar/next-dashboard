const { db } = require("@vercel/postgres");
const { users } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function alterUsers(client) {
  try {
    const createTable = await client.sql`
      ALTER TABLE users
      ADD COLUMN role VARCHAR(50) NOT NULL DEFAULT 'STUDENT',
      ADD COLUMN env VARCHAR(50) NOT NULL DEFAULT 'LOW';
    `;

    return {
      createTable,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedPDFs(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS pdfs (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_id UUID NOT NULL,
                module_id UUID NOT NULL,
                path VARCHAR(255) NOT NULL
            );
        `;
  } catch (error) {
    console.error("Error seeding pdfs:", error);
    throw error;
  }
}

async function seedUserPerformance(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // const createTable = await client.sql`
    //         CREATE TABLE IF NOT EXISTS user_performance (
    //             performance_id SERIAL PRIMARY KEY,
    //             user_id UUID NOT NULL,
    //             time_on_platform_seconds INTEGER,
    //             time_watching_videos_seconds INTEGER,
    //             interactions_count INTEGER,
    //             test_attempts_count INTEGER,
    //             average_test_score NUMERIC(5, 2),
    //             increase_activity BOOLEAN,
    //             timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    //         );
    //     `;
    // insert sample data for user_performance with values
    let users = await client.sql`select * from users`;
    users = users.rows;
    console.log(users);
    const insertedUserPerformance = await Promise.all(
      users.map(async (user) => {
        return client.sql`
        INSERT INTO user_performance (user_id, time_on_platform_seconds, time_watching_videos_seconds, interactions_count, test_attempts_count, average_test_score, increase_activity)
        VALUES (${user.id}, 200, 300, 5, 9, 20, true)
      `;
      }),
    );
    return {
      insertedUserPerformance,
    };
  } catch (error) {
    console.error("Error seeding user_performance:", error);
    throw error;
  }
}

async function seedModules(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS modules (
                    id SERIAL PRIMARY KEY,
                    video VARCHAR(255) NOT NULL,
                    title VARCHAR(255) NOT NULL,
                    description TEXT NOT NULL,
                    questions JSONB NOT NULL
                );
            `;
  } catch (error) {
    console.error("Error seeding learning_content:", error);
    throw error;
  }
}
async function seedTestAttempts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
                CREATE TABLE IF NOT EXISTS test_attempts (
                    attempt_id SERIAL PRIMARY KEY,
                    user_id UUID NOT NULL,
                    test_id UUID NOT NULL,
                    attempts_count INTEGER,
                    score INTEGER,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `;
  } catch (error) {
    console.error("Error seeding test_attempts:", error);
    throw error;
  }
}

async function seedUserModules(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS user_modules CASCADE`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
                    CREATE TABLE IF NOT EXISTS user_modules (
                        user_id UUID NOT NULL,
                        module_id INT NOT NULL,
                        completed BOOLEAN DEFAULT FALSE,
                        added_comments VARCHAR(255) DEFAULT NULL,
                        added_likes BOOLEAN DEFAULT FALSE,
                        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                    );
                `;
  } catch (error) {
    console.error("Error seeding user_modules:", error);
    throw error;
  }
}

async function seedModuleResults(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
                        CREATE TABLE IF NOT EXISTS module_results (
                            user_id UUID NOT NULL,
                            module_id UUID NOT NULL,
                            score INTEGER,
                            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                        );
                    `;
  } catch (error) {
    console.error("Error seeding module_results:", error);
    throw error;
  }
}

// async function seedInvoices(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//
//     // Create the "invoices" table if it doesn't exist
//     const createTable = await client.sql`
//     CREATE TABLE IF NOT EXISTS invoices (
//     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//     customer_id UUID NOT NULL,
//     amount INT NOT NULL,
//     status VARCHAR(255) NOT NULL,
//     date DATE NOT NULL
//   );
// `;
//
//     console.log(`Created "invoices" table`);
//
//     // Insert data into the "invoices" table
//     const insertedInvoices = await Promise.all(
//       invoices.map(
//         (invoice) => client.sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );
//
//     console.log(`Seeded ${insertedInvoices.length} invoices`);
//
//     return {
//       createTable,
//       invoices: insertedInvoices,
//     };
//   } catch (error) {
//     console.error("Error seeding invoices:", error);
//     throw error;
//   }
// }
//
// async function seedCustomers(client) {
//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//
//     // Create the "customers" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;
//
//     console.log(`Created "customers" table`);
//
//     // Insert data into the "customers" table
//     const insertedCustomers = await Promise.all(
//       customers.map(
//         (customer) => client.sql`
//         INSERT INTO customers (id, name, email, image_url)
//         VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//       ),
//     );
//
//     console.log(`Seeded ${insertedCustomers.length} customers`);
//
//     return {
//       createTable,
//       customers: insertedCustomers,
//     };
//   } catch (error) {
//     console.error("Error seeding customers:", error);
//     throw error;
//   }
// }
//
// async function seedRevenue(client) {
//   try {
//     // Create the "revenue" table if it doesn't exist
//     const createTable = await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;
//
//     console.log(`Created "revenue" table`);
//
//     // Insert data into the "revenue" table
//     const insertedRevenue = await Promise.all(
//       revenue.map(
//         (rev) => client.sql`
//         INSERT INTO revenue (month, revenue)
//         VALUES (${rev.month}, ${rev.revenue})
//         ON CONFLICT (month) DO NOTHING;
//       `,
//       ),
//     );
//
//     console.log(`Seeded ${insertedRevenue.length} revenue`);
//
//     return {
//       createTable,
//       revenue: insertedRevenue,
//     };
//   } catch (error) {
//     console.error("Error seeding revenue:", error);
//     throw error;
//   }
// }

const questions = [
  {
    question: "المحتوى أو الموضوع المراد تدريسه يعد مادة...",
    choices: [
      {
        id: "11",
        text: "علمية",
        answer: false,
      },
      {
        id: "21",
        text: "تعليمية",
        answer: true,
      },
      {
        id: "31",
        text: "فلمية",
        answer: false,
      },
    ],
  },
  {
    question:
      "...هى ذلك الشيء المادى الذى يستخدم في عرض محتوى المواد التعليمية.",
    choices: [
      {
        id: "12",
        text: "أجهزة العرض",
        answer: true,
      },
      {
        id: "22",
        text: "الأجهزة اللاسلكية",
        answer: false,
      },
      {
        id: "32",
        text: "أجهزة المراقبة",
        answer: false,
      },
    ],
  },
  {
    question:
      "تصنف أجهزة العرض بناء على ... إلى أجهزة عرض وأجهزة انتاج وأجهزة عرض وإنتاج معاً.",
    choices: [
      {
        id: "13",
        text: "فكرة العمل",
        answer: false,
      },
      {
        id: "23",
        text: "الوظيفة التي تقوم بها",
        answer: true,
      },
      {
        id: "34",
        text: "طبيعة المواد التعليمية",
        answer: false,
      },
    ],
  },
  {
    question:
      "تصنف أجهزة العرض بناء على ... إلى أجهزة اسقاط مباشر وغير مباشر ومنعكس.",
    choices: [
      {
        id: "14",
        text: "فكرة العمل",
        answer: false,
      },
      {
        id: "25",
        text: "الوظيفة التي تقوم بها",
        answer: true,
      },
      {
        id: "36",
        text: "طبيعة المواد التعليمية",
        answer: false,
      },
    ],
  },
  {
    question:
      "تصنف أجهزة العرض بناء على ... إلى أجهزة عرض المواد الثابتة والمتحركة.",
    choices: [
      {
        id: "18",
        text: "فكرة العمل",
        answer: false,
      },
      {
        id: "28",
        text: "الوظيفة التي تقوم بها",
        answer: false,
      },
      {
        id: "38",
        text: "طبيعة المواد التعليمية",
        answer: true,
      },
    ],
  },
];
const questions2 = [
  {
    question: "من مميزات جهاز كاميرا تصوير سطح المكتب........",
    choices: [
      {
        id: "1",
        text: "عرض صورة معكوسة",
        answer: true,
      },
      {
        id: "2",
        text: "استهلاك عالي للطاقة",
        answer: false,
      },
      {
        id: "3",
        text: "وجود مصباح واحد للإضاءة",
        answer: false,
      },
    ],
  },
  {
    question: "من الأجزاء الرئيسية بجهاز كاميرا تصوير سطح المكتب.......",
    choices: [
      {
        id: "4",
        text: "وحدة الكاميرا",
        answer: true,
      },
      {
        id: "5",
        text: "عدسة فيريزل",
        answer: false,
      },
      {
        id: "6",
        text: "المرشحات المزدوجة",
        answer: false,
      },
    ],
  },
  {
    question:
      "يستطيع جهاز كاميرا تصوير سطح المكتب تكبير جزء من الصورة بمعدل........",
    choices: [
      {
        id: "7",
        text: "36 مرة",
        answer: false,
      },
      {
        id: "8",
        text: "20 مرة",
        answer: false,
      },
      {
        id: "9",
        text: "2 مرة",
        answer: true,
      },
    ],
  },
  {
    question:
      "من المواد التعليمية التي يعرضها جهاز كاميرا تصوير سطح المكتب........",
    choices: [
      {
        id: "10",
        text: "الأفلام تعليمية",
        answer: false,
      },
      {
        id: "11",
        text: "الأسطوانات تعليمية",
        answer: false,
      },
      {
        id: "12",
        text: "الصور فوتوغرافية",
        answer: true,
      },
    ],
  },
  {
    question: "من مسميات جهاز عرض كاميرا تصوير سطح المكتب ......",
    choices: [
      {
        id: "13",
        text: "جهاز عرض الشفافيات",
        answer: false,
      },
      {
        id: "14",
        text: "جهاز العارض البصري",
        answer: true,
      },
      {
        id: "15",
        text: "جهاز عرض المواد المعتمة",
        answer: false,
      },
    ],
  },
];
const questions4 = [
  {
    question: "من المكونات المادية للسبورة الذكية .................",
    choices: [
      {
        id: "1",
        text: "الدرج الخاص بالأقلام والأدوات",
        answer: false,
      },
      {
        id: "2",
        text: "الممحاة الرقمية",
        answer: false,
      },
      {
        id: "3",
        text: "جميع ما سبق",
        answer: true,
      },
    ],
  },
  {
    question: "من المكونات البرمجية للسبورة الذكية ................",
    choices: [
      {
        id: "4",
        text: "برنامج الكاميرا",
        answer: false,
      },
      {
        id: "5",
        text: "برنامج الحاسوب الشخصي",
        answer: false,
      },
      {
        id: "6",
        text: "برنامج المسجل",
        answer: true,
      },
    ],
  },
  {
    question: "من مسميات السبورة الذكية........",
    choices: [
      {
        id: "7",
        text: "السبورة الضوئية",
        answer: false,
      },
      {
        id: "8",
        text: "السبورة اللونية",
        answer: false,
      },
      {
        id: "9",
        text: "السبورة البيضاء التفاعلية",
        answer: true,
      },
    ],
  },
  {
    question: "من متطلبات تشغيل السبورة الذكية غير الأساسية وجود........",
    choices: [
      {
        id: "10",
        text: "سلك توصيل جهاز الحاسوب بالسبورة",
        answer: true,
      },
      {
        id: "11",
        text: "الحاسوب الشخصي",
        answer: false,
      },
      {
        id: "12",
        text: "الطابعة",
        answer: false,
      },
    ],
  },
  {
    question: "مسارات المعلومات بجهاز السبورة الذكية يسير في .....",
    choices: [
      {
        id: "13",
        text: "اتجاه واحد",
        answer: false,
      },
      {
        id: "14",
        text: "اتجاهين",
        answer: false,
      },
      {
        id: "15",
        text: "ثلاث اتجاهات",
        answer: true,
      },
    ],
  },
];

const questions3 = [
  {
    question: "نوع العرض في جهاز عارض البيانات ..........",
    choices: [
      {
        id: "1",
        text: "خارجي",
        answer: false,
      },
      {
        id: "2",
        text: "داخلي",
        answer: false,
      },
      {
        id: "3",
        text: "داخلي خارجي",
        answer: true,
      },
    ],
  },
  {
    question: "من عيوب جهاز عارض البيانات .............",
    choices: [
      {
        id: "4",
        text: "التوصيل اللاسلكي",
        answer: true,
      },
      {
        id: "5",
        text: "حماية المعلومات",
        answer: false,
      },
      {
        id: "6",
        text: "غالى الثمن",
        answer: false,
      },
    ],
  },
  {
    question:
      ".................. هو جهاز إلكتروني ضوئي يستخدم في عرض مواد تعليمية مختلفة من جهاز الحاسوب أو أجهزة الفيديو",
    choices: [
      {
        id: "7",
        text: "جهاز العرض العلوي",
        answer: false,
      },
      {
        id: "8",
        text: "جهاز عارض البيانات",
        answer: true,
      },
      {
        id: "9",
        text: "جهاز الميكروفيش",
        answer: false,
      },
    ],
  },
  {
    question: "لضبط وضوح الصورة في جهاز عرض البيانات يتم الضغط على زر........",
    choices: [
      {
        id: "10",
        text: "Focus",
        answer: true,
      },
      {
        id: "11",
        text: "Input",
        answer: false,
      },
      {
        id: "12",
        text: "Out put",
        answer: false,
      },
    ],
  },
  {
    question:
      "للتحكم في مساحة الصورة في جهاز عرض البيانات يتم الضغط على زر........",
    choices: [
      {
        id: "13",
        text: "Focus",
        answer: false,
      },
      {
        id: "14",
        text: "zoom",
        answer: true,
      },
      {
        id: "15",
        text: "Out put",
        answer: false,
      },
    ],
  },
];
const questions5 = [
  {
    question:
      "في تقنية الهولوجرام ماذا يحدث للضوء عند سقوطه على المرايا...........",
    choices: [
      {
        id: "1",
        text: "ينعكس",
        answer: true,
      },
      {
        id: "2",
        text: "يحيد",
        answer: false,
      },
      {
        id: "3",
        text: "يتداخل",
        answer: false,
      },
    ],
  },
  {
    question: "الهولوجرام يكون صورة...............",
    choices: [
      {
        id: "4",
        text: "واقعية",
        answer: true,
      },
      {
        id: "5",
        text: "خيالية",
        answer: false,
      },
      {
        id: "6",
        text: "طبيعية",
        answer: false,
      },
    ],
  },
  {
    question: "ينكسر الضوء في الهولوجرام من خلال ................",
    choices: [
      {
        id: "7",
        text: "المرايا",
        answer: true,
      },
      {
        id: "8",
        text: "العدسات",
        answer: false,
      },
      {
        id: "9",
        text: "سطح الفيلم",
        answer: false,
      },
    ],
  },
  {
    question: "من تطبيقات الهولوجرام................",
    choices: [
      {
        id: "10",
        text: "البوستر",
        answer: false,
      },
      {
        id: "11",
        text: "الجوال",
        answer: false,
      },
      {
        id: "12",
        text: "أفلام الخيال العلمي",
        answer: true,
      },
    ],
  },
  {
    question: "تتكون أجهزة الهولوجرام من مجموعة موجات .........",
    choices: [
      {
        id: "13",
        text: "ضوئية",
        answer: true,
      },
      {
        id: "14",
        text: "مغناطيسية",
        answer: false,
      },
      {
        id: "15",
        text: "اشعاعية",
        answer: false,
      },
    ],
  },
];

const data = [
  {
    id: "1",
    video: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    title: "Module 1",
    description:
      "loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!  1",
    questions: JSON.stringify(questions),
  },
  {
    id: "2",
    video: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    title: "Module 2",
    description:
      "loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! 2",
    questions: JSON.stringify(questions2),
  },
  {
    id: "3",
    video: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    title: "Module 3",
    description:
      "loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! 3",
    questions: JSON.stringify(questions3),
  },
  {
    id: "4",
    video: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    title: "module 4",
    description:
      "loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! 4",
    questions: JSON.stringify(questions4),
  },
  {
    id: "5",
    video: "https://www.youtube.com/watch?v=wWgIAphfn2U",
    title: "module 5",
    description:
      "loremp ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! 5",
    questions: JSON.stringify(questions5),
  },
];
// const insertedModules = await Promise.all(
//   data.map(async (module) => {
//     return client.sql`
//       INSERT INTO modules (id, video, title, description, questions)
//       VALUES (${module.id}, ${module.video}, ${module.title}, ${module.description}, ${module.questions})
//       ON CONFLICT (id) DO NOTHING;
//     `;
//   }),
// );
//
// console.log(`Seeded ${insertedModules.length} modules`);
async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  // await seedPDFs(client);
  // await seedUserPerformance(client);
  // await seedModules(client);
  // await seedTestAttempts(client);
  // await seedUserModules(client);
  // await seedModuleResults(client);
  // const insertedModules = await Promise.all(
  //   data.map(async (module) => {
  //     return client.sql`
  //     INSERT INTO modules (id, video, title, description, questions)
  //     VALUES (${module.id}, ${module.video}, ${module.title}, ${module.description}, ${module.questions})
  //     ON CONFLICT (id) DO NOTHING;
  //   `;
  //   }),
  // );
  await seedUserModules(client);
  await client.end();
}

//

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
