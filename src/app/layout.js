export const metadata = {
  title: 'Aplikasi CRUD Next.js',
  description: 'Aplikasi CRUD sederhana dengan Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
          }
          
          @media (max-width: 768px) {
            .app-main {
              grid-template-columns: 1fr !important;
            }
          }
          
          /* Hover Effects */
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          
          input:focus {
            outline: none;
            border-color: #2575fc !important;
            box-shadow: 0 0 0 2px rgba(37, 117, 252, 0.2) !important;
          }
          
          /* Animations */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}