export function getAllStudentsNames (): Students[] {
    return [];
}

export interface Students {
    firstName: string,
    lastName: string,
    favoriteTimeToCode: 'morning' | 'night' | 'whatever',
}