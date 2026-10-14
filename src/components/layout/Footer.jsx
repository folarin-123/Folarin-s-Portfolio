import { profile } from '../../data/profile';
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
      © {new Date().getFullYear()} {profile.name}. Built with care.
    </footer>
  );
}
