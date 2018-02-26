export class ArrayHelper {
    static groupBy <T, Key>(items: ReadonlyArray<T>, getter: (item: T) => Key)  {
        const map = items.reduce(
            (entryMap, item) => {
                const key = getter(item);
                const itemsByKey = entryMap.get(key) || [];
                return entryMap.set(key, [...itemsByKey, item])
            },
            new Map<Key, ReadonlyArray<T>>()
        );

        return Array.from(map.keys()).map(key => ({ key, values: map.get(key)! }));
    }
        

    static flatten<T>(arrays: ReadonlyArray<ReadonlyArray<T>>): ReadonlyArray<T> {
        return [].concat.apply([], arrays);
    }
}