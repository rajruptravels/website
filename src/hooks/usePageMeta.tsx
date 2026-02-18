import { Helmet } from "react-helmet-async";
import React from 'react';

type MetaProps = {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
};

/**
 * Component that renders Helmet meta tags.
 * Replaces the previous usePageMeta hook.
 */
export const PageMeta = ({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
}: MetaProps) => {
    return (
        <Helmet>
            {/* Standard Meta */}
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && <meta property="og:description" content={ogDescription} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta property="og:type" content="website" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    );
};

// Deprecated hook wrapper for easier migration if needed, but we will update call sites.
export const usePageMeta = (props: MetaProps) => {
    // This pattern doesn't work well with Helmet in a hook without returning JSX.
    // We will remove usage of this hook.
    return null;
};
