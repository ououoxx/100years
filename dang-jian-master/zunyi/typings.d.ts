declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.mp3";
declare module "*.mp4";
declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
