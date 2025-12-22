# Bookmarks Feature

A curated collection of bookmarks to showcase articles, resources, and references that have influenced your design and development philosophy.

## Overview

The bookmarks feature is a simple, data-driven system that displays a sorted list of your favorite articles and resources. Bookmarks are organized by date and displayed with optional author information and custom icons.

## Adding Bookmarks

Bookmarks are stored in `/src/features/portfolio/data/bookmarks.ts` as a static array. To add a new bookmark, append an entry to the `BOOKMARKS` array.

### Bookmark Structure

```typescript
{
  title: string;           // Required: Display name/title of the bookmark
  url: string;             // Required: The full URL of the link
  author?: string;         // Optional: Author or source (person/company name)
  iconName?: string;       // Optional: Icon identifier for branding
  bookmarkedAt: string;    // Required: Date in "YYYY-MM-DD" format
}
```

### Example

```typescript
{
  title: "Design Engineering at Vercel",
  url: "https://vercel.com/blog/design-engineering-at-vercel",
  author: "Vercel",
  iconName: "vercel",
  bookmarkedAt: "2025-12-22",
}
```

## Available Icons

Custom icons are rendered when `iconName` is specified. Currently supported icons:

- `vercel` - Vercel brand icon
- `resend` - Resend brand icon

If `iconName` is omitted or not recognized, a generic bookmark icon is displayed.

### Adding New Icons

To add support for new icons:

1. Add the icon to your icon library (using shadcn/ui or another icon source)
2. Update the `getIcon()` function in `/src/features/portfolio/components/bookmarks/bookmark-item.tsx`
3. Use the new icon name in your bookmark entries

## Display Behavior

- **Sorting**: Bookmarks are sorted by date in descending order (newest first)
- **Collapsing**: The bookmarks list shows 6 items by default with a "Show More" toggle
- **Links**: All bookmarks open in a new tab with proper security attributes (`rel="noopener"`)
- **Formatting**: Dates are displayed in `dd.MM.yyyy` format

## File Structure

```
src/features/portfolio/
├── data/
│   └── bookmarks.ts          # Bookmark data storage
├── types/
│   └── bookmarks.ts          # TypeScript type definitions
└── components/
    └── bookmarks/
        ├── index.tsx         # Main bookmarks component
        └── bookmark-item.tsx # Individual bookmark item
```

### Type Definition

See `/src/features/portfolio/types/bookmarks.ts`:

```typescript
export type Bookmark = {
  title: string;
  url: string;
  author?: string;
  iconName?: string;
  bookmarkedAt: string;
};
```

## Components

### BookmarkItem (`bookmark-item.tsx`)

Renders a single bookmark with:

- Clickable link with underline on hover
- Optional custom icon or default bookmark icon
- Author information below the title
- Formatted bookmark date
- Accessible semantic HTML (description list structure)
- Tailwind CSS styling with dark mode support

### Bookmarks (`index.tsx`)

Main component that:

- Wraps bookmarks in a Panel layout
- Sorts bookmarks by date (newest first)
- Uses CollapsibleList for expandable display (max 6 items visible)
- Provides "Show More"/"Show Less" toggle

## Integration

The bookmarks component is rendered on the homepage at `src/app/(app)/(root)/page.tsx` and is accessible via the command menu (`/#bookmarks`).

## Best Practices

1. **Use descriptive titles** - Make it clear what the bookmark is about
2. **Include author/source** - Helps readers understand the credibility and origin
3. **Use consistent dates** - Dates control sort order, use current date for new bookmarks
4. **Categorize by author** - Group related bookmarks from the same source for visual interest
5. **Verify URLs** - Ensure links are correct and still active before committing

## Example Usage

```typescript
const BOOKMARKS: Bookmark[] = [
  {
    title: "7 Practical Animation Tips",
    url: "https://emilkowal.ski/ui/7-practical-animation-tips",
    author: "Emil Kowalski",
    bookmarkedAt: "2025-12-01",
  },
  {
    title: "Developing Taste",
    url: "https://emilkowal.ski/ui/developing-taste",
    author: "Emil Kowalski",
    bookmarkedAt: "2025-12-15",
  },
];
```

This creates two bookmarks from the same author, automatically sorted by date.
