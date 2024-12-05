// Generated TypeScript Entities

// Enums
export enum MediaType {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  AUDIO = "AUDIO",
  DOCUMENT = "DOCUMENT",
}

export enum Visibility {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  FRIENDS_ONLY = "FRIENDS_ONLY",
}

export enum ReportReason {
  SPAM = "SPAM",
  INAPPROPRIATE = "INAPPROPRIATE",
  COPYRIGHT = "COPYRIGHT",
  OTHER = "OTHER",
}

export enum ReportStatus {
  PENDING = "PENDING",
  REVIEWED = "REVIEWED",
  ACTION_TAKEN = "ACTION_TAKEN",
}

export enum Role {
  USER = "USER",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN",
}

export enum Engine {
  CHESS = "CHESS",
  GO = "GO",
}

// Interfaces
export interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string | null;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
  Collection?: Collection[];
  BrowsingHistory?: BrowsingHistory[];
  UserLibrary?: UserLibrary[];
  Report?: Report[];
  Like?: Like[];
  Comment?: Comment[];
}

export interface Collection {
  id: number;
  title: string;
  description?: string | null;
  tags: string[];
  userId: number;
  user?: User;
  mediaOrder: number[];
  engine: Engine;
  isDeleted: boolean;
  visibility: Visibility;
  popularity: number;
  createdAt: Date;
  updatedAt: Date;
  BrowsingHistory?: BrowsingHistory[];
}

export interface Media {
  id: number;
  type: MediaType;
  url: string;
  description?: string | null;
  thumbnailUrl?: string | null;
  altText?: string | null;
  reportedCount: number;
  createdAt: Date;
  updatedAt: Date;
  BrowsingHistory?: BrowsingHistory[];
  UserLibrary?: UserLibrary[];
  Report?: Report[];
  Like?: Like[];
  Comment?: Comment[];
}

export interface BrowsingHistory {
  id: number;
  userId: number;
  mediaId?: number | null;
  collectionId?: number | null;
  viewedAt: Date;
  user?: User;
  media?: Media | null;
  collection?: Collection | null;
}

export interface UserLibrary {
  id: number;
  userId: number;
  mediaId: number;
  savedAt: Date;
  user?: User;
  media?: Media;
}

export interface Like {
  id: number;
  userId: number;
  mediaId: number;
  createdAt: Date;
  user?: User;
  media?: Media;
}

export interface Comment {
  id: number;
  content: string;
  userId: number;
  mediaId: number;
  parentId?: number | null;
  createdAt: Date;
  user?: User;
  media?: Media;
  parent?: Comment | null;
  replies?: Comment[];
}

export interface Report {
  id: number;
  reporterId: number;
  mediaId?: number | null;
  reason: ReportReason;
  status: ReportStatus;
  resolvedAt?: Date | null;
  createdAt: Date;
  reporter?: User;
  media?: Media | null;
}
