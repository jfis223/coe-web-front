/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import("next").NextConfig} */
const { i18n } = require("./next-i18next.config");
const { withSentryConfig } = require("@sentry/nextjs");

const {
  NEXT_PUBLIC_SENTRY_ENABLED,
  NODE_ENV,
  NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_REST_PROXY_ENDPOINT,
  SENTRY_ORG,
  SENTRY_PROJECT,
  SENTRY_AUTH_TOKEN,
  SENTRY_URL,
  NEXT_PUBLIC_STRAPI_URL
} = process.env;

const isDev = NODE_ENV !== "production";

const apiDomain = NODE_ENV !== "production" ? "coe-web-cms.fly.dev" : NEXT_PUBLIC_API_URL?.replace("https://", "");

const moduleExports = {
  eslint: {
    dirs: ["pages", "src"]
  },
  reactStrictMode: true,
  async rewrites() {
    const DEFAULT_REWRITES = [
      {
        source: "/",
        destination: "/home"
      }
    ];
    return !(NODE_ENV === "production")
      ? {
          beforeFiles: [
            {
              source: "/rest/:path*",
              destination: `${NEXT_PUBLIC_REST_PROXY_ENDPOINT}/:path*`
            },
            ...DEFAULT_REWRITES
          ]
        }
      : { beforeFiles: [...DEFAULT_REWRITES] };
  },
  i18n,
  images: {
    domains: [apiDomain, "res.cloudinary.com"]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload"
          }
        ]
      }
    ];
  },
  webpack: (config, options) => {
    return config;
  }
};

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
  url: SENTRY_URL,
  org: SENTRY_ORG,
  project: SENTRY_PROJECT,
  authToken: SENTRY_AUTH_TOKEN
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports =
  NEXT_PUBLIC_SENTRY_ENABLED === "true" ? withSentryConfig(moduleExports, SentryWebpackPluginOptions) : withBundleAnalyzer(moduleExports);
