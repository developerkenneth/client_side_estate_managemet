import AuthHeader from "../components/auth/AuthHeader";

export default function UserLayout() {
  return (
    <div className="bg-secondary-cream text-on-surface min-h-screen flex flex-col">
        <AuthHeader />
    </div>
  );
}
