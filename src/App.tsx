import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EventsPage } from "./pages/EventsPage";
import { TeamPage } from "./pages/TeamSection";
import { GalleryPage } from "./pages/GalleryPage";
import { MilestonesPage } from "./pages/MilestonesPage";
import { SponsorsPage } from "./pages/SponsorsPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // scroll helper used by children (if they call onNavigate that originates here)
  const navigateToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // If Layout navigated here with state.scrollTo, perform the scroll once mounted.
  useEffect(() => {
    const state: any = location.state as any;
    const target = state?.scrollTo as string | undefined;
    if (target) {
      // use RAF to wait until the DOM paints (safer than an arbitrary timeout)
      requestAnimationFrame(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // clear the state so it doesn't fire again on back/forward
        navigate(location.pathname, { replace: true, state: {} });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div id="home">
        <HomePage onNavigate={navigateToSection} />
      </div>
      <div id="events">
        <EventsPage />
      </div>
      <div id="team">
        <TeamPage />
      </div>
      <div id="gallery">
        <GalleryPage />
      </div>
      <div id="milestones">
        <MilestonesPage />
      </div>
      <div id="sponsors">
        <SponsorsPage />
      </div>

      <Toaster />
    </div>
  );
}
