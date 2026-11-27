import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function VersionFooter() {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    api
      .version()
      .then((v) => {
        if (active) setVersion(v.version);
      })
      .catch(() => {
        if (active) setVersion(null);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <footer className="mt-8 min-h-5 text-sm text-gray-500" data-testid="version-footer">
      {version ? `v${version}` : null}
    </footer>
  );
}
