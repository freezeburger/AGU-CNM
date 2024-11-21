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
                    <a href="index.html" data-type="index-link">2.application documentation</a>
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
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-8a000eb5175299344a5b7eed2266dd3518cf0d6b50b1f92a85914503f5c9f6651c7743ffeb9a20fa5ac9b46d2d37d57625e6dc602b6809d75b4bcee2c843b37a"' : 'data-bs-target="#xs-components-links-module-AppModule-8a000eb5175299344a5b7eed2266dd3518cf0d6b50b1f92a85914503f5c9f6651c7743ffeb9a20fa5ac9b46d2d37d57625e6dc602b6809d75b4bcee2c843b37a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8a000eb5175299344a5b7eed2266dd3518cf0d6b50b1f92a85914503f5c9f6651c7743ffeb9a20fa5ac9b46d2d37d57625e6dc602b6809d75b4bcee2c843b37a"' :
                                            'id="xs-components-links-module-AppModule-8a000eb5175299344a5b7eed2266dd3518cf0d6b50b1f92a85914503f5c9f6651c7743ffeb9a20fa5ac9b46d2d37d57625e6dc602b6809d75b4bcee2c843b37a"' }>
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
                                <a href="modules/BaseModule.html" data-type="entity-link" >BaseModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BaseModule-b2d00066d5c94fb87e15cb3ee29b054c03d67567f366f970ed40f4f984b02456d80575332606341536ea2dd9ec99cbe840d87592eb41999b7e879977d199fd32"' : 'data-bs-target="#xs-components-links-module-BaseModule-b2d00066d5c94fb87e15cb3ee29b054c03d67567f366f970ed40f4f984b02456d80575332606341536ea2dd9ec99cbe840d87592eb41999b7e879977d199fd32"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BaseModule-b2d00066d5c94fb87e15cb3ee29b054c03d67567f366f970ed40f4f984b02456d80575332606341536ea2dd9ec99cbe840d87592eb41999b7e879977d199fd32"' :
                                            'id="xs-components-links-module-BaseModule-b2d00066d5c94fb87e15cb3ee29b054c03d67567f366f970ed40f4f984b02456d80575332606341536ea2dd9ec99cbe840d87592eb41999b7e879977d199fd32"' }>
                                            <li class="link">
                                                <a href="components/BaseButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseImageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-f31d912a89aca78460e3efc8bf1e7965d50d70680491ec6d3613394a2da51cd03472e31ee0dedb7f5cb224243a3dcf0efa07bafa6bf9f9c8edbd696b83294356"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-f31d912a89aca78460e3efc8bf1e7965d50d70680491ec6d3613394a2da51cd03472e31ee0dedb7f5cb224243a3dcf0efa07bafa6bf9f9c8edbd696b83294356"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-f31d912a89aca78460e3efc8bf1e7965d50d70680491ec6d3613394a2da51cd03472e31ee0dedb7f5cb224243a3dcf0efa07bafa6bf9f9c8edbd696b83294356"' :
                                        'id="xs-injectables-links-module-CoreModule-f31d912a89aca78460e3efc8bf1e7965d50d70680491ec6d3613394a2da51cd03472e31ee0dedb7f5cb224243a3dcf0efa07bafa6bf9f9c8edbd696b83294356"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MessageModule-5922c9b2f318037e884054b06871766dbd674ea9e9e1fc932871b135b47a12a431caebaaa0b0ffc41488ada87688d340f580a3bad2b8e55e3664d2c8b02ef0cc"' : 'data-bs-target="#xs-components-links-module-MessageModule-5922c9b2f318037e884054b06871766dbd674ea9e9e1fc932871b135b47a12a431caebaaa0b0ffc41488ada87688d340f580a3bad2b8e55e3664d2c8b02ef0cc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MessageModule-5922c9b2f318037e884054b06871766dbd674ea9e9e1fc932871b135b47a12a431caebaaa0b0ffc41488ada87688d340f580a3bad2b8e55e3664d2c8b02ef0cc"' :
                                            'id="xs-components-links-module-MessageModule-5922c9b2f318037e884054b06871766dbd674ea9e9e1fc932871b135b47a12a431caebaaa0b0ffc41488ada87688d340f580a3bad2b8e55e3664d2c8b02ef0cc"' }>
                                            <li class="link">
                                                <a href="components/MessageFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageSearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageSearchComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgExportModule.html" data-type="entity-link" >NgExportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NotificationModule-ebb9ce40ec741c1d81a1e0826a329a17f5fdd28f857b5464eb623539efdfe23294abbef313907cca0b01361b128086dfc0e9967e485f4219f462b5988d64bf77"' : 'data-bs-target="#xs-components-links-module-NotificationModule-ebb9ce40ec741c1d81a1e0826a329a17f5fdd28f857b5464eb623539efdfe23294abbef313907cca0b01361b128086dfc0e9967e485f4219f462b5988d64bf77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationModule-ebb9ce40ec741c1d81a1e0826a329a17f5fdd28f857b5464eb623539efdfe23294abbef313907cca0b01361b128086dfc0e9967e485f4219f462b5988d64bf77"' :
                                            'id="xs-components-links-module-NotificationModule-ebb9ce40ec741c1d81a1e0826a329a17f5fdd28f857b5464eb623539efdfe23294abbef313907cca0b01361b128086dfc0e9967e485f4219f462b5988d64bf77"' }>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-c4d972fa04c3fad268cfd6b72fe439f32ea8d6305fbdd7aa14764759183d7b0c18e8303fce723e34a2b45005dbef54ecbcd15c08d588bf951d488d230f7be605"' : 'data-bs-target="#xs-components-links-module-UserModule-c4d972fa04c3fad268cfd6b72fe439f32ea8d6305fbdd7aa14764759183d7b0c18e8303fce723e34a2b45005dbef54ecbcd15c08d588bf951d488d230f7be605"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-c4d972fa04c3fad268cfd6b72fe439f32ea8d6305fbdd7aa14764759183d7b0c18e8303fce723e34a2b45005dbef54ecbcd15c08d588bf951d488d230f7be605"' :
                                            'id="xs-components-links-module-UserModule-c4d972fa04c3fad268cfd6b72fe439f32ea8d6305fbdd7aa14764759183d7b0c18e8303fce723e34a2b45005dbef54ecbcd15c08d588bf951d488d230f7be605"' }>
                                            <li class="link">
                                                <a href="components/UserActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserLoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserLoginFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserRegisterFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegisterFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewModule.html" data-type="entity-link" >ViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewModule-faa751b8b573c011356fc040db84d8e013d5bf4d7e11e455d6891390dea435722de11eebf895d8c923fd7540be6184d65f96226d397c93f7eb5e2f48f99c022a"' : 'data-bs-target="#xs-components-links-module-ViewModule-faa751b8b573c011356fc040db84d8e013d5bf4d7e11e455d6891390dea435722de11eebf895d8c923fd7540be6184d65f96226d397c93f7eb5e2f48f99c022a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewModule-faa751b8b573c011356fc040db84d8e013d5bf4d7e11e455d6891390dea435722de11eebf895d8c923fd7540be6184d65f96226d397c93f7eb5e2f48f99c022a"' :
                                            'id="xs-components-links-module-ViewModule-faa751b8b573c011356fc040db84d8e013d5bf4d7e11e455d6891390dea435722de11eebf895d8c923fd7540be6184d65f96226d397c93f7eb5e2f48f99c022a"' }>
                                            <li class="link">
                                                <a href="components/ViewHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewRoutingModule.html" data-type="entity-link" >ViewRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link" >EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link" >NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppEvent.html" data-type="entity-link" >AppEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CrudService.html" data-type="entity-link" >CrudService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link" >Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReactiveService.html" data-type="entity-link" >ReactiveService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});