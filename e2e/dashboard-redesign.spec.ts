import { test, expect } from "@playwright/test";

test.describe("User Dashboard Redesign - E2E Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to user dashboard services tab directly
    await page.goto("/user/dashboard?tab=services");
  });

  test("1. Sidebar Navigation & Layout Grid (Desktop vs Mobile)", async ({ page }) => {
    // A. Active state: "My Services" sidebar button must be active (highlighted with crimson red bg)
    const servicesSidebarBtn = page.getByRole("button", { name: "My Services" });
    await expect(servicesSidebarBtn).toBeVisible();
    await expect(servicesSidebarBtn).toHaveClass(/bg-\[#d62038\]/);

    // B. Desktop Grid Layout (1280px viewport): Active services (col-span-2) & Notifications (col-span-1)
    await page.setViewportSize({ width: 1280, height: 800 });
    const gridLayout = page.locator(".grid.grid-cols-1.lg\\:grid-cols-3");
    await expect(gridLayout).toBeVisible();

    const serviceListCol = page.locator("div:has-text('Your Services')").first();
    const notifCol = page.locator("div:has-text('Notifications')").first();
    await expect(serviceListCol).toBeVisible();
    await expect(notifCol).toBeVisible();

    // C. Mobile Viewport Layout (375px viewport): Elements stack vertically
    await page.setViewportSize({ width: 375, height: 667 });
    const cols = page.locator(".grid.grid-cols-1.lg\\:grid-cols-3 > div");
    const count = await cols.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("2. Service Cards & Badges Styling Checks", async ({ page }) => {
    // A. Card Background & Shadows: bg-white rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.03)]
    const cards = page.locator(".bg-white.rounded-\\[12px\\]");
    await expect(cards.first()).toBeVisible();

    // B. Status badges verification
    // 1. In Progress
    const inProgressBadge = page.locator("span:has-text('In Progress')");
    await expect(inProgressBadge).toBeVisible();
    await expect(inProgressBadge).toHaveClass(/bg-\\[#EAFAF1\\]/);
    await expect(inProgressBadge).toHaveClass(/text-\\[#1E8449\\]/);

    // 2. Docs Pending
    const docsPendingBadge = page.locator("span:has-text('Docs Pending')");
    await expect(docsPendingBadge).toBeVisible();
    await expect(docsPendingBadge).toHaveClass(/bg-\\[#FEF9E7\\]/);
    await expect(docsPendingBadge).toHaveClass(/text-\\[#B7770D\\]/);

    // 3. Completed
    const completedBadge = page.locator("span:has-text('Completed')");
    await expect(completedBadge).toBeVisible();
    await expect(completedBadge).toHaveClass(/bg-\\[#EAF0FB\\]/);
    await expect(completedBadge).toHaveClass(/text-\\[#1A5276\\]/);

    // C. Progress bars: 6px tall (h-[6px]), Crimson Red (#C0392B) or Completed blue (#1A5276)
    const progressBarContainer = page.locator(".w-full.bg-gray-100.rounded-full.h-\\[6px\\]");
    await expect(progressBarContainer.first()).toBeVisible();

    const progressFill = page.locator(".h-full.rounded-full.transition-all");
    const firstFill = progressFill.first();
    const lastFill = progressFill.last();

    // First fill is In Progress (Crimson Red)
    await expect(firstFill).toHaveClass(/bg-\\[#C0392B\\]/);
    // Last fill is Completed (Corporate Blue)
    await expect(lastFill).toHaveClass(/bg-\\[#1A5276\\]/);
  });

  test("3. Sliding Detail Drawer Transitions & Backdrop Overlay Clicks", async ({ page }) => {
    // A. Trigger view details on Private Limited Incorporation card
    const viewDetailsBtn = page.locator("button:has-text('View details')").first();
    await viewDetailsBtn.click();

    // B. Check overlay backdrop and drawer visibility
    const backdrop = page.locator(".fixed.inset-0.bg-black\\/40");
    await expect(backdrop).toBeVisible();

    const drawer = page.locator(".bg-white.h-full.flex.flex-col.shadow-2xl");
    await expect(drawer).toBeVisible();

    // C. Tab Switching: Switch to Documents tab
    const docsTabBtn = page.getByRole("button", { name: "Documents" });
    await docsTabBtn.click();
    await expect(docsTabBtn).toHaveClass(/text-\\[#C0392B\\]/); // Active Tab Crimson underline

    const docSectionHeader = page.locator("h4:has-text('Submitted')");
    await expect(docSectionHeader).toBeVisible();

    // D. Switch to Chat / Support tab
    const chatTabBtn = page.getByRole("button", { name: "Chat / Support" });
    await chatTabBtn.click();
    await expect(chatTabBtn).toHaveClass(/text-\\[#C0392B\\]/);

    const chatInput = page.getByPlaceholder("Type a message to your CA...");
    await expect(chatInput).toBeVisible();

    // E. Close drawer by clicking backdrop
    // Playwright clicks at the top-left edge of backdrop to make sure it clicks the backdrop, not the drawer
    await backdrop.click({ position: { x: 10, y: 10 } });
    await expect(drawer).not.toBeVisible();
  });

  test("4. Real-time Document Upload & Notification Dismissal State Integration", async ({ page }) => {
    // A. Verify initial notification presence
    const linkedNotification = page.locator("p:has-text('Upload your PAN card for GST registration')");
    await expect(linkedNotification).toBeVisible();

    // B. Open GST details drawer and navigate to Documents tab
    // The second card represents GST Registration
    const gstCardDetailsBtn = page.locator("button:has-text('View details')").nth(1);
    await gstCardDetailsBtn.click();

    const docsTab = page.getByRole("button", { name: "Documents" });
    await docsTab.click();

    // C. Click mock Upload on PAN Card of Business document
    const uploadButton = page.locator("button:has-text('Upload')").first();
    await expect(uploadButton).toBeVisible();
    await uploadButton.click();

    // D. Verify state transition to "Verified ✓"
    const verifiedStatus = page.locator("span:has-text('Verified ✓')").last();
    await expect(verifiedStatus).toBeVisible();

    // E. Close the drawer
    const closeBtn = page.getByLabel("Close panel");
    await closeBtn.click();

    // F. Verify linked notification is instantly dismissed
    await expect(linkedNotification).not.toBeVisible();
  });

  test("5. Simulated Live Chat Interactivity & Expert Reply Automation", async ({ page }) => {
    // A. Open incorporation card and navigate to Chat tab
    const incorporationCardBtn = page.locator("button:has-text('View details')").first();
    await incorporationCardBtn.click();

    const chatTabBtn = page.getByRole("button", { name: "Chat / Support" });
    await chatTabBtn.click();

    // B. Type and submit user message
    const chatInput = page.getByPlaceholder("Type a message to your CA...");
    await chatInput.fill("I have uploaded the office address proof.");
    
    const sendBtn = page.getByLabel("Send message");
    await sendBtn.click();

    // C. Check user bubble style: Crimson Red (#C0392B) background and white text
    const latestUserBubble = page.locator(".bg-\\[#C0392B\\]").last();
    await expect(latestUserBubble).toBeVisible();
    await expect(latestUserBubble).toHaveText("I have uploaded the office address proof.");

    // D. Check expert reply simulation after 2 seconds: Light gray background
    const expertResponseBubble = page.locator(".bg-gray-100").last();
    await expect(expertResponseBubble).toBeVisible({ timeout: 2500 });
  });
});
