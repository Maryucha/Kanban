'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Kanban Angular Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/introduction.html" data-type="entity-link" data-context-id="additional">Introduction</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/actions.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' : 'data-target="#xs-additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' }>
                                                <span class="link-name">Actions</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' : 'id="xs-additional-page-a621090d97e6945f1ad8712a75663a9526c89e82f4c51669e199e5729f2eb1a95786f4a7f5c9da7989834aa50163e6ea0eacc97c91d363e6628b2392da6c4a99"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/creation-of-a-task.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Creation of a task</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/edition-of-a-task.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Edition of a task</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/delete-a-task.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Delete a task</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/actions/update-the-status-of-a-task.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Update the status of a task</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6317bbe74f6235652984f185ff1d539dd8b529ee0cd48543d5c131d36fe50e3c12af15df26d9bd1c4390be70bafd07115455b0436d913e7a0f83444c73ba280c"' : 'data-target="#xs-components-links-module-AppModule-6317bbe74f6235652984f185ff1d539dd8b529ee0cd48543d5c131d36fe50e3c12af15df26d9bd1c4390be70bafd07115455b0436d913e7a0f83444c73ba280c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6317bbe74f6235652984f185ff1d539dd8b529ee0cd48543d5c131d36fe50e3c12af15df26d9bd1c4390be70bafd07115455b0436d913e7a0f83444c73ba280c"' :
                                            'id="xs-components-links-module-AppModule-6317bbe74f6235652984f185ff1d539dd8b529ee0cd48543d5c131d36fe50e3c12af15df26d9bd1c4390be70bafd07115455b0436d913e7a0f83444c73ba280c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c07f581824bdd32e7a93fda89c2e26eaddb68e941865258489fa7aeec0762a9ed7d2cb4e2496d170ccc7c0d2addda24348d215f186ac938d99415995f7cc3774"' : 'data-target="#xs-components-links-module-SharedModule-c07f581824bdd32e7a93fda89c2e26eaddb68e941865258489fa7aeec0762a9ed7d2cb4e2496d170ccc7c0d2addda24348d215f186ac938d99415995f7cc3774"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c07f581824bdd32e7a93fda89c2e26eaddb68e941865258489fa7aeec0762a9ed7d2cb4e2496d170ccc7c0d2addda24348d215f186ac938d99415995f7cc3774"' :
                                            'id="xs-components-links-module-SharedModule-c07f581824bdd32e7a93fda89c2e26eaddb68e941865258489fa7aeec0762a9ed7d2cb4e2496d170ccc7c0d2addda24348d215f186ac938d99415995f7cc3774"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});