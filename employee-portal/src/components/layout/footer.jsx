export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-4 text-center">
      <p className="text-[0.75rem] leading-[1.4] font-normal text-slate-400">
        © {new Date().getFullYear()} JCasp Technologies Pvt. Ltd. | Confidential
        – Internal Use Only
      </p>
    </footer>
  );
}
