import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.click("text=voir les articles");
  await page.goto("http://localhost:5173/articles");
  await page.click("text=Introduction à React Router");
  await page.goto("http://localhost:5173/articles/1");
  await page.goto("http://localhost:5173/articles/1/comments");
  await page.goto("http://localhost:5173/about");
  await page.goto("http://localhost:5173/contact");
  await page.goto("http://localhost:5173/admin");
  await page.goto("http://localhost:5173/login");
  await page.fill("input", "admin@mail.com");
  await page.fill("input", "1234");
  await page.click("input");
  await page.fill("input", "admin@mail.com");
  await page.fill("input", "1234");
  await page.click("text=Login");
  await page.goto("http://localhost:5173/admin");
  await page.goto("http://localhost:5173/editor");
  await page.goto("http://localhost:5173/help");
  await page.click("text=Profile");
  await page.goto("http://localhost:5173/profile");
  await page.goto("http://localhost:5173/profile/info");
  await page.goto("http://localhost:5173/profile/posts");
  await page.goto("http://localhost:5173/admin");
  // Add assertions here
  // await expect(page).toHaveTitle('Expected Title');

  await browser.close();
})();
