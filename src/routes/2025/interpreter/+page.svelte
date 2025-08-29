<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();

  //////////////////////////////////////////////////////////////////////////////

  type Entity = number;
  const MAX_ENTITIES = 5000;
  type ComponentType = number;
  const MAX_COMPONENTS = 32;
  type Signature = number;

  class EntityManager {
    
  }
  class ComponentArray {}
  class ComponentManager {}
  class System {}
  class SystemManager {}
  class Coordinator {}

  //////////////////////////////////////////////////////////////////////////////

  type Horz = -1;
  type Vert = 1;

  type TileArrayComponent = {
    parent?: Entity;
    direction: Horz | Vert;
    children: Array<Entity>;
    spans: Array<number>;
  };

  type TileComponent = {
    parent: Entity;
    tabs: Array<Entity>;
    activeTab: number;
  };

  type TabComponent = {
    parent: Entity;
    name: string;
    scrollX?: number;
    scrollY?: number;
    selection?: Selection;
  } & (
    | { kind: "empty" }
    | {
        kind: "file";
        file?: Entity;
        text: string;
        lang: string;
        warnings: Array<Entity>;
        errors: Array<Entity>;
      }
    | {
        kind: "repl";
        history: Array<[prompt: string, result: string]>;
        prompt: string;
      }
    | { kind: "output"; text?: string }
    | { kind: "docs"; page: Entity }
  );

  //////////////////////////////////////////////////////////////////////////////

  let showNavBar = $state(true);
  let showStatBar = $state(true);

  let onFileClick = () => {};
  let onEditClick = () => {};
  let onSelectionClick = () => {};
  let onViewClick = () => {};
  let onRunClick = () => {};
  let onHelpClick = () => {};

  //////////////////////////////////////////////////////////////////////////////

  let dir_or = (direction: Horz | Vert, a: any, b: any) => {
    return direction === 1 ? a : b;
  };
</script>

<svelte:head>
  <title>Interpreter | thefireflyer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />

  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/firacode@6.2.0/distr/fira_code.css"
  />
</svelte:head>

{#snippet tile(inner: Snippet<[]>, tabs: Array<string>, active: number)}
  <div class="tile">
    <div class="tabs">
      {#each tabs as tab}
        {#if tabs.indexOf(tab) == active}
          <button style="background: #222; padding:0 1ch 0 1ch;">{tab}</button>
        {:else}
          <button style="padding:0 1ch 0 1ch;">{tab}</button>
        {/if}
      {/each}
    </div>
    {@render inner()}
  </div>
{/snippet}

{#snippet emptyTile()}
  {#snippet inner()}
    <div
      style="flex-grow:1;display: flex; align-items:center; place-content:center;color:gray;"
    >
      [scratch]
    </div>
  {/snippet}
  {@render tile(inner, ["scratch", "HelloWorld.sl"], 0)}
{/snippet}

{#snippet textTile()}
  {#snippet inner()}
    <div style="flex-grow:1;display: flex;overflow:scroll;">
      <code
        class="cons"
        contenteditable="plaintext-only"
        autocapitalize="none"
        spellcheck="false"
        translate="no"
      >
        <div id="1">((0.1.0))</div>
        <div id="2">main = "hello, " ++ "world!"</div>
      </code>
    </div>
  {/snippet}
  {@render tile(inner, ["HelloWorld.sl"], 0)}
{/snippet}

{#snippet otherTile()}
  {#snippet inner()}
    <div
      style="flex-grow:1;display: flex; align-items:center; place-content:center;color:gray;"
    >
      (Press <kbd>Ctrl+Enter</kbd> to run)
    </div>
  {/snippet}
  {@render tile(inner, ["Getting Started", "Output", "REPL"], 1)}
{/snippet}

{#snippet tileArray(
  direction: Horz | Vert,
  children: Array<Snippet<[]>>,
  spans: Array<number>
)}
  <div
    style="flex-grow: 1;display:flex;flex-direction: {dir_or(
      direction,
      'row',
      'column'
    )};"
  >
    <div
      style="flex-grow: 1;display:flex;min-{dir_or(
        direction,
        'width',
        'height'
      )}:{spans.at(0)}%;max-{dir_or(direction, 'width', 'height')}:{spans.at(
        0
      )}%;"
    >
      {@render (children.at(0) as Snippet)()}
    </div>
    {#each children.slice(1) as child}
      <div
        class={dir_or(direction, "tilesp-h", "tilesp-v")}
        role="separator"
        aria-hidden="true"
      ></div>
      {@render child()}
    {/each}
  </div>
{/snippet}

<div id="root">
  {#if showNavBar}
    <header>
      <button onclick={onFileClick}>File</button>
      <button onclick={onEditClick}>Edit</button>
      <button onclick={onSelectionClick}>Selection</button>
      <button onclick={onViewClick}>View</button>
      <button onclick={onRunClick}>Run</button>
      <button onclick={onHelpClick}>Help</button>
      <div class="flex-grow"></div>
      <a href="">Examples</a>
      <a href="">Reference</a>
      <a href="">Formal Semantics</a>
      <a href="">Source</a>
    </header>
  {/if}
  <main id="tiles">
    {#snippet inner()}
      {@render tileArray(-1, [otherTile, emptyTile], [70, 30])}
    {/snippet}
    {@render tileArray(1, [textTile, inner], [60, 40])}
  </main>
  {#if showStatBar}
    <footer>
      <button>BASIC</button>
      <button>[scratch]</button>
      <div class="flex-grow"></div>
      <span> Ln ##, Col ## (## selected) </span>
    </footer>
  {/if}
</div>

<style lang="scss">
  $primary: rgb(250, 230, 243);
  $primary-o50: transparentize($primary, 0.5);
  $primary-o60: transparentize($primary, 0.6);
  $primary-o70: transparentize($primary, 0.7);
  $primary-o80: transparentize($primary, 0.8);
  $primary-o90: transparentize($primary, 0.9);

  #root {
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    // gap: 2em;

    flex-grow: 1;

    font-size: 11pt;
    font-family: "fira sans";
  }

  #tiles {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  .tile {
    user-select: contain;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .tabs {
    display: flex;
    flex-direction: row;
    border-bottom: solid 1pt #333;
  }

  .tilesp-h {
    width: 0.7ch;
    background: #222;
    border-left: solid 1pt #333;
    border-right: solid 1pt #333;
  }

  .tilesp-v {
    height: 0.7ch;
    background: #222;
    border-top: solid 1pt #333;
    border-bottom: solid 1pt #333;
  }

  .tilesp-h:hover {
    cursor: col-resize;
    background: #333;
  }

  .tilesp-v:hover {
    cursor: row-resize;
    background: #333;
  }

  :global(.code-block) {
    overflow: scroll;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }

  :global(.nums) {
    padding: 1ch;
    line-break: none;
    word-break: keep-all;
    user-select: none;
    pointer-events: none;
    color: gray;
    min-width: 3ch;
    text-align: right;
  }

  :global(.cons) {
    flex-grow: 1;
    padding: 1ch;
    white-space: nowrap;
  }

  [contenteditable] {
    outline: 0px solid transparent;
  }

  .repl {
    overflow: scroll;
    min-width: 40%;
    padding: 1ch;
    white-space: nowrap;
  }

  .errors {
    color: rgb(213, 6, 82);
  }
  .warnings {
    color: rgb(225, 134, 7);
  }

  header {
    display: flex;
    align-items: center;
    place-content: start;
    gap: 1em;
    // font-size: 10pt;
    padding-left: 1ch;
    padding-right: 1ch;
    border-bottom: solid #333 1pt;
  }

  footer {
    display: flex;
    align-items: center;
    place-content: start;
    gap: 1em;
    // font-size: 10pt;
    padding-left: 1ch;
    padding-right: 1ch;
    border-top: solid #333 1pt;
  }

  select {
    background-color: inherit;
  }

  // select,
  // ::picker(select) {
  //   appearance: base-select;
  // }

  // select::picker-icon {
  //   color: #999;
  //   transition: 0.4s rotate;
  // }

  kbd {
    font-family: "Fira Code VF", monospace;
    font-size: 10pt;
    padding-left: 0.7ch;
    padding-right: 0.7ch;
  }

  #edit-mode {
    font-family: "Fira Code";
  }

  select:hover {
    background-color: #333;
  }

  button:hover {
    background-color: #333;
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    background-color: #333;
  }

  .fira-sans-regular {
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .fira-sans-bold {
    font-family: "Fira Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .fira-sans-regular-italic {
    font-family: "Fira Sans", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .fira-sans-bold-italic {
    font-family: "Fira Sans", sans-serif;
    font-weight: 700;
    font-style: italic;
  }

  code {
    font-size: 10pt;
    font-family: "Fira Code", monospace;
  }

  @supports (font-variation-settings: normal) {
    code {
      font-family: "Fira Code VF", monospace;
    }
  }

  @media screen and (max-width: 60em) {
    .viewer {
      flex-direction: column;
    }

    .defs {
      height: 70%;
      max-width: none;
      border-right: none;
      border-bottom: solid #333 1pt;
    }

    .cons {
      width: 100%;
    }

    .repl {
      height: 30%;
    }
  }
</style>
