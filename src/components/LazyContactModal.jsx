import { lazy, Suspense, useEffect, useState } from "react";

const ContactModal = lazy(() => import("./ContactModal"));

export default function LazyContactModal(props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (props.isOpen) setReady(true);
  }, [props.isOpen]);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <ContactModal {...props} />
    </Suspense>
  );
}
