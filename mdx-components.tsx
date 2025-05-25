import { CustomLink } from "@/components/CustomLink";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: CustomLink,
    ...components,
  };
}
