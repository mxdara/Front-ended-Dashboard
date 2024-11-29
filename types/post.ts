export interface Post {
    id: string;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: Comment[];
}

export interface Comment {
    id: string;
    text: string;
    username: string;
}