import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";
import axios from "axios";

const PdfViewer = () => {
  const { id } = useParams();
  const [pdfUrl, setPdfUrl] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/book/${id}`);
        setPdfUrl(res.data.pdfUrl);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPdfUrl();
  }, [id]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;
