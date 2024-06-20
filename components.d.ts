// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents{
    RouterLink: typeof import('vue-router')['Routerlink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}

export{}