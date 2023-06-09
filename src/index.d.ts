declare function progressBar(
    percentage: number,
    barWidth: number,
    emptyChars: string,
    fullChars: string,
    returnAr?: boolean,
    firstEdgeOverride?: string[],
    lastEdgeOverride?: string[]
): string | string[];

export = { progressBar };
