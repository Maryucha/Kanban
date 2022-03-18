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
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
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
                                            'data-target="#components-links-module-AppModule-fd5c8b98154e6dda1c4287f4199e924103fb754c8932c3952ae1b33a2f0f1ef4a9b0b0f393ff79e24cc2097cc489917f52f982ae9ffce399be4d48cf6c8de417"' : 'data-target="#xs-components-links-module-AppModule-fd5c8b98154e6dda1c4287f4199e924103fb754c8932c3952ae1b33a2f0f1ef4a9b0b0f393ff79e24cc2097cc489917f52f982ae9ffce399be4d48cf6c8de417"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fd5c8b98154e6dda1c4287f4199e924103fb754c8932c3952ae1b33a2f0f1ef4a9b0b0f393ff79e24cc2097cc489917f52f982ae9ffce399be4d48cf6c8de417"' :
                                            'id="xs-components-links-module-AppModule-fd5c8b98154e6dda1c4287f4199e924103fb754c8932c3952ae1b33a2f0f1ef4a9b0b0f393ff79e24cc2097cc489917f52f982ae9ffce399be4d48cf6c8de417"' }>
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
                                            'data-target="#components-links-module-SharedModule-fa0e84b1077fada311ad0cc1353b7fc087acf5c869e6cb51493bc3acc0194c8a9b013547ffa4a5d6bc165d8f97d8f391aee2031a85e819f0add47d1bf5114a44"' : 'data-target="#xs-components-links-module-SharedModule-fa0e84b1077fada311ad0cc1353b7fc087acf5c869e6cb51493bc3acc0194c8a9b013547ffa4a5d6bc165d8f97d8f391aee2031a85e819f0add47d1bf5114a44"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-fa0e84b1077fada311ad0cc1353b7fc087acf5c869e6cb51493bc3acc0194c8a9b013547ffa4a5d6bc165d8f97d8f391aee2031a85e819f0add47d1bf5114a44"' :
                                            'id="xs-components-links-module-SharedModule-fa0e84b1077fada311ad0cc1353b7fc087acf5c869e6cb51493bc3acc0194c8a9b013547ffa4a5d6bc165d8f97d8f391aee2031a85e819f0add47d1bf5114a44"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-14fd12177967cd1a5b7b1c0f14c53ebfeae1f694c1f20f4be139a7add08e47fab6b1c3f2f1e4344f638b6361da576fa7b15fd254f3072abe5a6ab78752bf7629"' : 'data-target="#xs-components-links-module-ViewsModule-14fd12177967cd1a5b7b1c0f14c53ebfeae1f694c1f20f4be139a7add08e47fab6b1c3f2f1e4344f638b6361da576fa7b15fd254f3072abe5a6ab78752bf7629"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-14fd12177967cd1a5b7b1c0f14c53ebfeae1f694c1f20f4be139a7add08e47fab6b1c3f2f1e4344f638b6361da576fa7b15fd254f3072abe5a6ab78752bf7629"' :
                                            'id="xs-components-links-module-ViewsModule-14fd12177967cd1a5b7b1c0f14c53ebfeae1f694c1f20f4be139a7add08e47fab6b1c3f2f1e4344f638b6361da576fa7b15fd254f3072abe5a6ab78752bf7629"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link" >ViewsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Board.html" data-type="entity-link" >Board</a>
                            </li>
                            <li class="link">
                                <a href="classes/Column.html" data-type="entity-link" >Column</a>
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