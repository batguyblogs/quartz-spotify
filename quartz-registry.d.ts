declare module "@jackyzha0/quartz/components/registry" {
  import type { QuartzComponentConstructor } from "@quartz-community/types"
  export const componentRegistry: {
    register(pluginName: string, constructor: QuartzComponentConstructor): void
    setOptionOverrides(pluginName: string, opts: Record<string, unknown>): void
  }
}
