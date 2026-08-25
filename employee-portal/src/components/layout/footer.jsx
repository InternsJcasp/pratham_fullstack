export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-400 text-xs text-center py-4 border-t border-slate-700">
      <p>
        © {new Date().getFullYear()} JCasp Technologies Pvt. Ltd. | Confidential
        – Internal Use Only
      </p>
    </footer>
  );
}
