export const metadata = {
  verification: {
    google: "MEBhJFo7YPBFom22dlssggcRCNRnLR1DURvvG1TIcno",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:'sans-serif',background:'#0a0a0a',color:'white'}}>
        {children}
      </body>
    </html>
  )
}
