declare module "*.svg" {
  const component: React.FC<React.SVGProps<SVGSVGElement>>
  export default component
}

declare module "*.svg?url" {
  const content: unknown
  export default content
}
