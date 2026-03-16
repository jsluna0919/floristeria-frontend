export interface PageResponse<T> {
    content: T[];
    page: PageInfo
}

export interface PageInfo {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
}