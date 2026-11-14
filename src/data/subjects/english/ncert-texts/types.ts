export interface NcertReferenceSection {
  heading?: string;
  paragraphs: string[];
}

export interface NcertReferenceEntry {
  chapterKey: string;
  title: string;
  author: string;
  bookName: string;
  pdfPath: string;
  pdfStartPage: number;
  pdfEndPage: number;
  sections: NcertReferenceSection[];
}
