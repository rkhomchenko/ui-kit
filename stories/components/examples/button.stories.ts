import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {Meta, moduleMetadata, StoryFn} from '@storybook/angular';

export default {
	component: MatButton,
	decorators: [
		moduleMetadata({
			imports: [
				MatButtonModule,
				MatDividerModule,
				MatIconModule,
				MatTooltipModule
			]
		})
	],
	title: 'Components/Angular Material/Button/Examples'
} as Meta;

export const BasicButtons: StoryFn = () => ({
	template: `
    <section>
      <div class="example-label">Basic</div>
      <div class="example-button-row">
        <button mat-button>Basic</button>
        <button mat-button color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Raised</div>
      <div class="example-button-row">
        <button mat-raised-button>Basic</button>
        <button mat-raised-button color="primary">Primary</button>
        <button mat-raised-button color="accent">Accent</button>
        <button mat-raised-button color="warn">Warn</button>
        <button mat-raised-button disabled>Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Stroked</div>
      <div class="example-button-row">
        <button mat-stroked-button>Basic</button>
        <button mat-stroked-button color="primary">Primary</button>
        <button mat-stroked-button color="accent">Accent</button>
        <button mat-stroked-button color="warn">Warn</button>
        <button mat-stroked-button disabled>Disabled</button>
        <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Flat</div>
      <div class="example-button-row">
        <button mat-flat-button>Basic</button>
        <button mat-flat-button color="primary">Primary</button>
        <button mat-flat-button color="accent">Accent</button>
        <button mat-flat-button color="warn">Warn</button>
        <button mat-flat-button disabled>Disabled</button>
        <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Icon</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
            <mat-icon>more_vert</mat-icon>
          </button>
          <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
            <mat-icon>home</mat-icon>
          </button>
          <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
            <mat-icon>menu</mat-icon>
          </button>
          <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
            <mat-icon>favorite</mat-icon>
          </button>
          <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
            <mat-icon>open_in_new</mat-icon>
          </button>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
              <mat-icon>bookmark</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab color="warn" aria-label="Example icon button with a home icon">
              <mat-icon>home</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab disabled aria-label="Example icon button with a heart icon">
              <mat-icon>favorite</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Mini FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-mini-fab color="accent" aria-label="Example icon button with a plus one icon">
              <mat-icon>plus_one</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-mini-fab color="warn" aria-label="Example icon button with a filter list icon">
              <mat-icon>filter_list</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-mini-fab disabled aria-label="Example icon button with a home icon">
              <mat-icon>home</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
	styles: [
		`
    section {
      display: table;
    }

    .example-label {
      display: table-cell;
      font-size: 14px;
      margin-left: 8px;
      min-width: 120px;
    }

    .example-button-row {
      display: table-cell;
      max-width: 600px;
    }

    .example-button-row .mat-mdc-button-base {
      margin: 8px 8px 8px 0;
    }

    .example-flex-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .example-button-container {
      display: flex;
      justify-content: center;
      width: 120px;
    }
  `
	]
});

export const ButtonVarieties: StoryFn = () => ({
	template: `
    <h3>Basic Buttons</h3>
    <div class="example-button-row">
      <button mat-button>Basic</button>
      <button mat-button color="primary">Primary</button>
      <button mat-button color="accent">Accent</button>
      <button mat-button color="warn">Warn</button>
      <button mat-button disabled>Disabled</button>
      <a mat-button routerLink=".">Link</a>
    </div>

    <h3>Raised Buttons</h3>
    <div class="example-button-row">
      <button mat-raised-button>Basic</button>
      <button mat-raised-button color="primary">Primary</button>
      <button mat-raised-button color="accent">Accent</button>
      <button mat-raised-button color="warn">Warn</button>
      <button mat-raised-button disabled>Disabled</button>
      <a mat-raised-button routerLink=".">Link</a>
    </div>

    <h3>Stroked Buttons</h3>
    <div class="example-button-row">
      <button mat-stroked-button>Basic</button>
      <button mat-stroked-button color="primary">Primary</button>
      <button mat-stroked-button color="accent">Accent</button>
      <button mat-stroked-button color="warn">Warn</button>
      <button mat-stroked-button disabled>Disabled</button>
      <a mat-stroked-button routerLink=".">Link</a>
    </div>

    <h3>Flat Buttons</h3>
    <div class="example-button-row">
      <button mat-flat-button>Basic</button>
      <button mat-flat-button color="primary">Primary</button>
      <button mat-flat-button color="accent">Accent</button>
      <button mat-flat-button color="warn">Warn</button>
      <button mat-flat-button disabled>Disabled</button>
      <a mat-flat-button routerLink=".">Link</a>
    </div>

    <h3>Icon Buttons</h3>
    <div class="example-button-row">
      <button mat-icon-button matTooltip="Basic" aria-label="Example icon-button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button matTooltip="Primary" color="primary" aria-label="Example icon-button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button matTooltip="Accent" color="accent" aria-label="Example icon-button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button matTooltip="Warn" color="warn" aria-label="Example icon-button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <div matTooltip="Disabled" class="example-disabled">
        <button mat-icon-button disabled aria-label="Example icon-button with a heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
      </div>
      <a mat-icon-button matTooltip="Link" routerLink="." aria-label="Example icon-button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </a>
    </div>

    <h3>Fab Buttons</h3>
    <div class="example-button-row">
      <button mat-fab matTooltip="Primary" color="primary" aria-label="Example fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-fab matTooltip="Accent" color="accent" aria-label="Example fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-fab matTooltip="Warn" color="warn" aria-label="Example fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <div matTooltip="Disabled" class="example-disabled">
        <button mat-fab disabled aria-label="Example fab with a heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
      </div>
      <a mat-fab matTooltip="Link" routerLink="." aria-label="Example fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </a>
    </div>

    <h3>Mini Fab Buttons</h3>
    <div class="example-button-row">
      <button mat-mini-fab matTooltip="Primary" color="primary" aria-label="Example mini fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-mini-fab matTooltip="Accent" color="accent" aria-label="Example mini fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-mini-fab matTooltip="Warn" color="warn" aria-label="Example mini fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <div matTooltip="Disabled" class="example-disabled">
        <button mat-mini-fab disabled aria-label="Example mini fab with a heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
      </div>
      <a mat-mini-fab matTooltip="Link" routerLink="." aria-label="Example mini fab with a heart icon">
        <mat-icon>favorite</mat-icon>
      </a>
    </div>

    <h3>Extended Fab</h3>
    <div class="example-button-row">
      <button mat-fab extended color="primary">
        <mat-icon>favorite</mat-icon>
        Primary
      </button>
      <button mat-fab extended color="accent">
        <mat-icon>favorite</mat-icon>
        Accent
      </button>
      <button mat-fab extended color="warn">
        <mat-icon>favorite</mat-icon>
        Warn
      </button>
      <button mat-fab extended disabled>
        <mat-icon>favorite</mat-icon>
        Disabled
      </button>
      <a mat-fab extended routerLink=".">
        <mat-icon>favorite</mat-icon>
        Link
      </a>
    </div>`,
	styles: [
		`
    .example-button-row button,
    .example-button-row a {
      margin-right: 8px;
    }

    .example-disabled {
      display: inline-block;
    }
  `
	]
});
