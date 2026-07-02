/**
 * @vidyaflow/types
 *
 * Shared TypeScript type definitions used across all VidyaFlow apps.
 *
 * This package is the single source of truth for domain types.
 * All apps and packages import from here to ensure consistency.
 *
 * @example
 * import type { Student, Organization } from '@vidyaflow/types';
 */

// ─── Domain Types ─────────────────────────────────────────────────────────────
export type * from './src/domain/user';
export type * from './src/domain/organization';
export type * from './src/domain/student';
export type * from './src/domain/academic';

// ─── Common Types ─────────────────────────────────────────────────────────────
export type * from './src/common';

// ─── Utility Types ───────────────────────────────────────────────────────────
export type * from './src/utils';
