import CMS from "netlify-cms-app";
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import InfoPagePreview from "./preview-templates/InfoPagePreview";
import InvolvementPagePreview from "./preview-templates/InvolvementPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import ProgramsPagePreview from "./preview-templates/ProgramsPagePreview";

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("info", InfoPagePreview);
CMS.registerPreviewTemplate("involvement", InvolvementPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("programs", ProgramsPagePreview);

// Pages:
// Index
// Get Involved
// Programs
// Club Info
// Who We are
// News
