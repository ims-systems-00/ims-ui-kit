interface UsePreRenderProcessingConfig {
    src?: string;
    generateLink?: (storageInfo: any) => Promise<string>;
    storageInfo?: any;
}
interface UsePreRenderProcessingResult {
    link: string | undefined;
}
export default function usePreRenderProcessing(config: UsePreRenderProcessingConfig): UsePreRenderProcessingResult;
export {};
