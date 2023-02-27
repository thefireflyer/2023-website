import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async () => {
    return {
        files: [
            {
                name: 'notes',
                slug: '',
                id: 0,
                children: [
                    {
                        name: 'test',
                        slug: 'test',
                        id: 0,
                        children: [
                            {
                                name: 'agdglkajlk',
                                slug: 'test-agdglkajlk',
                                id: 1,
                                children: []
                            },
                        ]
                    },
                    {
                        name: 'test2',
                        slug: 'test2',
                        id: 0,
                        children: []
                    },
                ]
            },
        ]
    };
};