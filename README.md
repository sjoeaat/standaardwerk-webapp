# Standaardwerk WebApp

Web interface for the Standaardwerk Parser with real-time editing and TIA Portal XML generation.

## Features

- **Visual Editor**: Real-time editing of industrial step programs
- **Live Preview**: Instant parsing and validation feedback
- **TIA Portal Export**: Generate XML files compatible with TIA Portal
- **Syntax Highlighting**: Code editor with industrial programming syntax
- **Debug Tools**: Built-in debugging and analysis tools
- **Component Library**: Reusable UI components for industrial applications

## Installation

```bash
npm install
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Upload Document**: Drag and drop a DOCX file or paste text
2. **Edit & Validate**: Use the visual editor to modify the program
3. **Live Preview**: See parsing results in real-time
4. **Export**: Generate TIA Portal XML or JSON output
5. **Debug**: Use built-in tools to analyze parsing issues

## Components

### Core Components
- `CodeEditor` - Syntax-highlighted code editor
- `AnalysisView` - Program structure visualization
- `DebugView` - Debugging and error analysis
- `TiaXmlPreview` - TIA Portal XML preview

### UI Components
- `Button` - Styled button component
- `Tab` - Tab navigation component
- `ConditionTag` - Condition visualization
- `StepCard` - Step program card component

## TIA Portal Integration

The webapp generates XML files compatible with TIA Portal:
- Function blocks (FB)
- Networks and logic blocks
- Variable declarations
- Step program structures

## Dependencies

Requires **standaardwerk-parser** as a dependency for core parsing functionality.

## Build Configuration

- **Vite**: Fast build tool and dev server
- **React**: UI framework
- **TailwindCSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## License

MIT