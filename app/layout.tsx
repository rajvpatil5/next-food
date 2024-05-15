import MainLayout from "@/components/MainLayout/MainLayout";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <MainLayout />
        {children}
      </body>
    </html>
  );
}

