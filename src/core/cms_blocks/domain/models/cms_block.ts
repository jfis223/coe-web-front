import type { CMSTextBlock } from "@/src/core/cms_blocks/domain/models/blocks/cms_text_block";
import type { CMSAccordion } from "@/src/core/cms_blocks/domain/models/blocks/cms_accordion";
import type { CMSGallery } from "@/src/core/cms_blocks/domain/models/blocks/cms_gallery";
import type { CMSSlider } from "@/src/core/cms_blocks/domain/models/blocks/cms_slider";
import type { CMSIconTextList } from "@/src/core/cms_blocks/domain/models/blocks/cms_icon_text_list";
import type { CMSVideoBlock } from "@/src/core/cms_blocks/domain/models/blocks/cms_video";
import type { CMSTeam } from "@/src/core/cms_blocks/domain/models/blocks/cms_team";
import type { CMSContactForm } from "@/src/core/cms_blocks/domain/models/blocks/cms_contact_form";
import type { CMSFullWidthImage } from "@/src/core/cms_blocks/domain/models/blocks/cms_full_width_image";
import type { CMSContactLinks } from "@/src/core/cms_blocks/domain/models/blocks/cms_contact_links";

export type CMSBlock =
  | CMSTextBlock
  | CMSAccordion
  | CMSGallery
  | CMSSlider
  | CMSIconTextList
  | CMSVideoBlock
  | CMSTeam
  | CMSContactForm
  | CMSFullWidthImage
  | CMSContactLinks;
