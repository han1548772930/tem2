declare module '*';

export interface UseInfiniteScrollOptions extends UseScrollOptions {
  /**
   * The minimum distance between the bottom of the element and the bottom of the viewport
   *
   * @default 0
   */
  distance?: number
}
/**
 * Reactive infinite scroll.
 *
 * @see https://vueuse.org/useInfiniteScroll
 */
export declare function useInfiniteScroll(
  element: MaybeRef<
  HTMLElement | SVGElement | Window | Document | null | undefined
  >,
  onLoadMore: (state: UnwrapNestedRefs<ReturnType<typeof useScroll>>) => void,
  options?: UseInfiniteScrollOptions
): void
