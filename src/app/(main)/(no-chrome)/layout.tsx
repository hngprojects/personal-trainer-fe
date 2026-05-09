export default function NoChrome({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="w-full bg-[#F5F5F5]">{children}</div>
}
