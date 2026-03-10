import { useEffect } from "react";

function DocumentTitle({ pageTitle }) {
  useEffect(() => {
    document.title = `watchfactory - ${pageTitle}`;
  }, [pageTitle]);

  return (
    <>
     
    </>
  );
}

export default DocumentTitle
