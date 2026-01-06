import type { Schema, Struct } from '@strapi/strapi';

export interface SharedImageSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_sections';
  info: {
    displayName: 'ImageSection';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSectionImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_images';
  info: {
    displayName: 'SectionImage';
  };
  attributes: {};
}

export interface SharedSectionQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_quotes';
  info: {
    displayName: 'SectionQuote';
    icon: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface SharedSectionRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_rich_texts';
  info: {
    displayName: 'SectionRichText';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.image-section': SharedImageSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section-image': SharedSectionImage;
      'shared.section-quote': SharedSectionQuote;
      'shared.section-rich-text': SharedSectionRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
