webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"admin-layout.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/administrar-ponto/administrar-ponto.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrarPontoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialog_dialog_aprovar_abono_dialog_aprovar_abono_module__ = __webpack_require__("./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_aprovar_marcacao_dialog_aprovar_marcacao_module__ = __webpack_require__("./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_confirm_dialog_confirm_module__ = __webpack_require__("./src/app/dialog/dialog-confirm/dialog-confirm.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_dialog_folha_ponto_dialog_folha_ponto_module__ = __webpack_require__("./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_historico_administrar_ponto_dialog_historico_administrar_ponto_module__ = __webpack_require__("./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialog_dialog_reprovar_marcacoes_dialog_reprovar_marcacoes_module__ = __webpack_require__("./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__frequencia_frequencia_module__ = __webpack_require__("./src/app/frequencia/frequencia.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_marcacao__ = __webpack_require__("./src/app/model/marcacao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipe_group_marcacao_pipe__ = __webpack_require__("./src/app/pipe/group-marcacao.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_marcacoes_service__ = __webpack_require__("./src/app/service/marcacoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__administrar_ponto_administrar_ponto_component__ = __webpack_require__("./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__bt_acao_bt_acao_component__ = __webpack_require__("./src/app/administrar-ponto/bt-acao/bt-acao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lancar_ponto_atraso_lancar_ponto_atraso_component__ = __webpack_require__("./src/app/administrar-ponto/lancar-ponto-atraso/lancar-ponto-atraso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__marcacoes_marcacoes_component__ = __webpack_require__("./src/app/administrar-ponto/marcacoes/marcacoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_dialog_dialog_observacao_assinatura_frequencia_dialog_observacao_assinatura_frequencia_module__ = __webpack_require__("./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AdministrarPontoModule = (function () {
    function AdministrarPontoModule() {
    }
    AdministrarPontoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__frequencia_frequencia_module__["a" /* FrequenciaModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__frequencia_frequencia_module__["a" /* FrequenciaModule */],
                __WEBPACK_IMPORTED_MODULE_9__dialog_dialog_historico_administrar_ponto_dialog_historico_administrar_ponto_module__["a" /* DialogHistoricoAdministrarPontoModule */],
                __WEBPACK_IMPORTED_MODULE_6__dialog_dialog_aprovar_marcacao_dialog_aprovar_marcacao_module__["a" /* DialogAprovarMarcacaoModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__dialog_dialog_folha_ponto_dialog_folha_ponto_module__["a" /* DialogFolhaPontoModule */],
                __WEBPACK_IMPORTED_MODULE_7__dialog_dialog_confirm_dialog_confirm_module__["a" /* DialogConfirmModule */],
                __WEBPACK_IMPORTED_MODULE_5__dialog_dialog_aprovar_abono_dialog_aprovar_abono_module__["a" /* DialogAprovarAbonoModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__dialog_dialog_reprovar_marcacoes_dialog_reprovar_marcacoes_module__["a" /* DialogReprovarMarcacoesModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_20_app_dialog_dialog_observacao_assinatura_frequencia_dialog_observacao_assinatura_frequencia_module__["a" /* DialogObservacaoAssinaturaFrequenciaModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__pipe_group_marcacao_pipe__["a" /* GroupMarcacaoPipe */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__administrar_ponto_administrar_ponto_component__["a" /* AdministrarPontoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__lancar_ponto_atraso_lancar_ponto_atraso_component__["a" /* LancarPontoAtrasoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipe_group_marcacao_pipe__["a" /* GroupMarcacaoPipe */],
                __WEBPACK_IMPORTED_MODULE_19__marcacoes_marcacoes_component__["a" /* MarcacoesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__bt_acao_bt_acao_component__["a" /* BtAcaoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__service_frequencia_service__["a" /* FrequenciaService */],
                __WEBPACK_IMPORTED_MODULE_15__service_marcacoes_service__["a" /* MarcacoesService */],
                __WEBPACK_IMPORTED_MODULE_12__model_marcacao__["a" /* Marcacao */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DATE_LOCALE */], useValue: 'pt-BR' }
            ],
        })
    ], AdministrarPontoModule);
    return AdministrarPontoModule;
}());



/***/ }),

/***/ "./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <app-funcionario></app-funcionario>\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-danger\">\r\n                <h3 class=\"card-title\">Administrar FrequÃªncia</h3>\r\n                <p class=\"card-category\">AdministraÃ§Ã£o de frequÃªncia do funcionÃ¡rio</p>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label for=\"filter\">MÃªs da FrequÃªncia:</label>\r\n                        <div class=\"card card-stats\">\r\n                            <mat-select style=\"height: 50px; padding: 5px; padding-left: 15px;\"\r\n                                placeholder=\"Selecione...\" (change)=\"marcacoes($event)\" [(ngModel)]=\"selectedValue\"\r\n                                name=\"projetos\">\r\n                                <mat-option *ngFor=\"let item of frequenciaList\" [value]=\"item\">\r\n                                    {{item.mesAnoFrequencia}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div [hidden]=\"!loading\" class=\"container-fluid col-lg-6 col-md-12\" align=\"center\">\r\n                    <h5>Buscando...</h5>\r\n                    <mat-spinner [diameter]=\"80\"></mat-spinner>\r\n                </div>\r\n                <div [hidden]=\"loading || !enableField\" *ngIf=\"!isVoltar\">\r\n                    <app-bt-acao (updateGrid)=\"atualizarGrid($event)\" [frequencia]=\"frequencia\"\r\n                        [enableAnexo]=\"enableAnexo\" [id]=\"idFrequencia\" [isFolhaValidada]=\"isFolhaValidada\"\r\n                        [isDisponibilizar]=\"isDisponibilizar\" [isCodProjetoSaeb]=\"isCodProjetoSaeb\" ></app-bt-acao>\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <mat-card>\r\n                            <mat-card-header>\r\n                                <mat-card-title>\r\n                                    <span class=\"text-primary\">InformaÃ§Ãµes</span>\r\n                                </mat-card-title>\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <span *ngIf=\"totalHorasTrabalhadas\"> <b>Total de Horas Trabalhadas no mÃªs:</b>\r\n                                    {{ totalHorasTrabalhadas | dateHelper: 'time' }} </span>\r\n                            </mat-card-content>\r\n                        </mat-card>\r\n                        <app-marcacoes [frequencia]=\"frequencia\" [maskTime]=\"maskTime\"\r\n                            [isFolhaValidada]=\"isFolhaValidada\" [idFrequencia]=\"idFrequencia\" ></app-marcacoes>\r\n                        <button mat-raised-button class=\"btn btn-danger pull-left\" (click)=\"openDialogAprovarLote()\"\r\n                            *ngIf=\"enableValidarLote()\">\r\n                            <i class=\"material-icons\">done</i> Aprovar Em Lote\r\n                        </button>\r\n                        <button mat-raised-button class=\"btn btn-info pull-right\" (click)=\"openDialogObservacaoFrequencia()\" *ngIf=\"enableNaoAssinatura()\">\r\n                            <i class=\"material-icons\">textsms</i>ObservaÃ§Ã£o da nÃ£o Assinatura Resp.\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"isVoltar\">\r\n                    <app-bt-acao (updateGrid)=\"atualizarGrid($event)\" [frequencia]=\"frequencia\"\r\n                        [enableAnexo]=\"enableAnexo\" [id]=\"idFrequencia\" [isFolhaValidada]=\"isFolhaValidada\"\r\n                        [isDisponibilizar]=\"isDisponibilizar\" [isGeracaoAutomatica]=\"isGeracaoAutomatica\"></app-bt-acao>\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <mat-card>\r\n                            <mat-card-header>\r\n                                <mat-card-title>\r\n                                    <span class=\"text-primary\">InformaÃ§Ãµes</span>\r\n                                </mat-card-title>\r\n                            </mat-card-header>\r\n                            <mat-card-content>\r\n                                <span *ngIf=\"totalHorasTrabalhadas\"> <b>Total de Horas Trabalhadas no mÃªs:</b>\r\n                                    {{ totalHorasTrabalhadas | dateHelper: 'time' }} </span>\r\n                            </mat-card-content>\r\n                        </mat-card>\r\n                        <app-marcacoes [frequencia]=\"frequencia\" [maskTime]=\"maskTime\" [isFolhaValidada]=\"isFolhaValidada\" [idFrequencia]=\"idFrequencia\" ></app-marcacoes>\r\n                        <button mat-raised-button class=\"btn btn-danger pull-left\" (click)=\"openDialogAprovarLote()\" *ngIf=\"enableValidarLote()\">\r\n                            <i class=\"material-icons\">done</i> Aprovar Em Lote\r\n                        </button>\r\n                        <button mat-raised-button class=\"btn btn-info pull-right\" (click)=\"openDialogObservacaoFrequencia()\" *ngIf=\"enableNaoAssinatura()\">\r\n                            <i class=\"material-icons\">done</i>ObservaÃ§Ã£o da nÃ£o Assinatura Resp.\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-card-title {\n  color: gray; }\n"

/***/ }),

/***/ "./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdministrarPontoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_aprovar_marcacao_dialog_aprovar_marcacao_component__ = __webpack_require__("./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_dialog_dialog_observacao_assinatura_frequencia_dialog_observacao_assinatura_frequencia_component__ = __webpack_require__("./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdministrarPontoComponent = (function () {
    function AdministrarPontoComponent(frequenciaService, user, dialog, emitirEventoService, _avRoute) {
        this.frequenciaService = frequenciaService;
        this.user = user;
        this.dialog = dialog;
        this.emitirEventoService = emitirEventoService;
        this._avRoute = _avRoute;
        this.frequencia = [];
        this.frequenciaList = [];
        this.maskTime = [/\d/, /\d/, ':', /\d/, /\d/];
        this.enableField = false;
        this.isFolhaValidada = false;
        this.isDisponibilizar = true;
        this.isCodProjetoSaeb = false;
        this.isGeracaoAutomatica = false;
        this.loading = false;
    }
    AdministrarPontoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emitirEventoService.mensagem.subscribe(function (obj) {
            if (obj) {
                _this.getTypeEmiter(obj);
            }
        });
        if (!this.hasPermission('acessoRH') && !this.hasPermission('coordenadorSRH')) {
            var matricula = this.user.matricula();
            this.frequencias(matricula);
        }
        this.isVoltar = this._avRoute.snapshot.queryParamMap.get("voltar");
        if (this.isVoltar) {
            this.buscarFrequenciaQueryparam();
            this.enableField = true;
            // console.log(this.enableField);
        }
    };
    /** defiene o tipo de refresh */
    AdministrarPontoComponent.prototype.getTypeEmiter = function (obj) {
        if (obj.type === 'funcionario') {
            this.frequencias(obj.data.codigoDominio);
        }
        else if (obj.data === 'remover'
            || obj.data === 'dialogAprovar'
            || obj.data === 'dialogReprovar'
            || obj.data === 'abono') {
            this.carregarGrid();
            this.enableField = true;
        }
        return false;
    };
    /**
     * Carrega lista da tela principal
     */
    AdministrarPontoComponent.prototype.frequencias = function (matricula) {
        var _this = this;
        this.frequenciaService.getFrequencias(matricula).subscribe(function (item) {
            _this.frequenciaList = item;
        });
        this.frequencia = [];
    };
    AdministrarPontoComponent.prototype.marcacoes = function (event) {
        this.idFrequencia = event.value.id;
        this.isFolhaValidada = event.value.validado != null ? event.value.validado : false;
        this.isDisponibilizar = event.value.idDisponibilizada == null ? false : true;
        this.enableAnexo = event.value.fileNameFrequencia == null ? false : true;
        this.isCodProjetoSaeb = this.isCodigoSaeb(event.value.codProjeto);
        this.situacaoFrequencia = event.value.situacaoFrequencia;
        this.isGeracaoAutomatica = event.value.geracaoAutomatica;
        this.carregarGrid();
        if (this.frequencia) {
            this.enableField = true;
        }
    };
    AdministrarPontoComponent.prototype.hasPermission = function (permission) {
        return this.user.hasPermission(permission);
    };
    // carrega a grid principal
    AdministrarPontoComponent.prototype.carregarGrid = function () {
        var _this = this;
        if (this.idFrequencia) {
            this.loading = true;
            this.frequenciaService.getDiasByFrequencia(this.idFrequencia).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["d" /* take */])(1)).subscribe(function (item) {
                _this.frequencia = item;
                // console.log(this.frequencia);
                _this.loading = false;
                _this.calcularTotalHorasTrabalhadas();
            });
        }
    };
    AdministrarPontoComponent.prototype.enableValidarLote = function () {
        var temAcesso = this.hasPermission('validarRegFreq');
        return (temAcesso && this.enableField && !this.isFolhaValidada);
    };
    /**
     * Aprovar marcaÃ§Ãµes em lote
     */
    AdministrarPontoComponent.prototype.openDialogAprovarLote = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialog_dialog_aprovar_marcacao_dialog_aprovar_marcacao_component__["a" /* DialogAprovarMarcacaoComponent */], {
            width: '600px',
            data: {
                all: true,
                frequencias: this.frequencia
            }
        });
    };
    AdministrarPontoComponent.prototype.atualizarGrid = function (event) {
        this.carregarGrid();
    };
    AdministrarPontoComponent.prototype.calcularTotalHorasTrabalhadas = function () {
        if (this.frequencia && this.frequencia.length > 0) {
            this.totalHorasTrabalhadas = this.frequencia.filter(function (item) { return item.horasTrabalhadas; }).reduce(function (a, b) { return a + b.horasTrabalhadas; }, 0);
        }
    };
    AdministrarPontoComponent.prototype.buscarFrequenciaQueryparam = function () {
        var _this = this;
        this.matricula = this._avRoute.snapshot.queryParamMap.get("matricula");
        this.competencia = this._avRoute.snapshot.queryParamMap.get("competencia");
        if (this.matricula && this.competencia) {
            this.frequenciaService.getFrequencias(this.matricula).subscribe(function (item) {
                _this.frequenciaList = item;
                _this.frequenciaList.forEach(function (i) {
                    if (i.mesAnoFrequencia == _this.competencia) {
                        _this.selectedValue = i;
                        _this.idFrequencia = i.id;
                        _this.isFolhaValidada = i.validado != null ? i.validado : false;
                        _this.isDisponibilizar = i.idDisponibilizada == null ? false : true;
                        _this.isGeracaoAutomatica = i.isGeracaoAutomatica != null ? i.isGeracaoAutomatica : true;
                        _this.enableAnexo = i.fileNameFrequencia == null ? false : true;
                        _this.situacaoFrequencia = i.situacaoFrequencia;
                        _this.carregarGrid();
                    }
                });
            });
        }
    };
    AdministrarPontoComponent.prototype.isCodigoSaeb = function (cod) {
        return cod == 1000;
    };
    AdministrarPontoComponent.prototype.openDialogObservacaoFrequencia = function () {
        // console.log(this.idFrequencia);
        var observacao = null;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8_app_dialog_dialog_observacao_assinatura_frequencia_dialog_observacao_assinatura_frequencia_component__["a" /* DialogObservacaoAssinaturaFrequenciaComponent */], {
            width: '600px',
            data: {
                id: this.idFrequencia,
                getObservacao: this.frequenciaService.getObservacaoNaoAssinada(this.idFrequencia),
                observacao: observacao
            }
        });
    };
    AdministrarPontoComponent.prototype.enableNaoAssinatura = function () {
        return (this.enableField && !this.isFolhaValidada);
    };
    AdministrarPontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-administrar-ponto',
            template: __webpack_require__("./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.html"),
            styles: [__webpack_require__("./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__service_frequencia_service__["a" /* FrequenciaService */],
            __WEBPACK_IMPORTED_MODULE_7__service_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AdministrarPontoComponent);
    return AdministrarPontoComponent;
}());



/***/ }),

/***/ "./src/app/administrar-ponto/bt-acao/bt-acao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <button mat-raised-button class=\"btn btn-danger pull-left\" (click)=\"openDialogFolhaPonto()\" *ngIf=\"hasPermission('anexarFreqSRF')\">\r\n        <i class=\"material-icons\">unarchive</i>Anexar FrequÃªncia\r\n    </button>\r\n    <div *ngIf=\"enableAnexo \">\r\n        <button mat-raised-button class=\"btn btn-warning pull-left\" (click)=\"downloadFrequencia()\" title=\"baixar frequÃªncia\">\r\n            <i class=\"material-icons\">archive</i>Baixar FrequÃªncia\r\n        </button>\r\n        <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"validarFrequencia()\" \r\n        *ngIf=\"enableAnexo && hasPermission('validarRegFreq') && !isFolhaValidada \">\r\n            <i class=\"material-icons\">done</i>Validar FrequÃªncia\r\n        </button>\r\n    </div>\r\n    <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"downloadPDF()\" >\r\n        <i class=\"material-icons\">print</i>Imprimir\r\n    </button>\r\n    <button mat-raised-button class=\"btn btn-success pull-right\" (click)=\"disponibilizarFolha()\" *ngIf=\"isFolhaValidada && !isDisponibilizar && hasPermission('disponibilizarFrequencia') && isCodProjetoSaeb \">\r\n        <i class=\"material-icons\">vertical_align_top</i>Disponibilizar\r\n    </button>\r\n    <button mat-raised-button class=\"btn pull-right\" (click)=\"voltar()\" *ngIf=\"isVoltar\"><i class=\"material-icons\">reply</i>Voltar</button>\r\n    <span *ngIf=\"isDisponibilizar\" style=\"margin-top: 7px;\"><i class=\"material-icons\">assignment_turned_in</i>FrequÃªncia Disponibilizada</span>\r\n</div>"

/***/ }),

/***/ "./src/app/administrar-ponto/bt-acao/bt-acao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administrar-ponto/bt-acao/bt-acao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtAcaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_dialog_folha_ponto_dialog_folha_ponto_component__ = __webpack_require__("./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BtAcaoComponent = (function () {
    function BtAcaoComponent(frequenciaService, dialog, user, fileService, emitirEventoService, _avRoute, _router) {
        this.frequenciaService = frequenciaService;
        this.dialog = dialog;
        this.user = user;
        this.fileService = fileService;
        this.emitirEventoService = emitirEventoService;
        this._avRoute = _avRoute;
        this._router = _router;
        this.isDisponibilizar = true;
        this.updateGrid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isVoltar = false;
    }
    BtAcaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emitirEventoService.mensagem.subscribe(function (obj) {
            if (obj.data == 'anexada') {
                _this.enableAnexo = true;
            }
        });
        this.preencheCamposNavigate();
    };
    BtAcaoComponent.prototype.hasPermission = function (permission) {
        return this.user.hasPermission(permission);
    };
    /**
    * Dialog para anexar e imprimir Folha de Ponto
    */
    BtAcaoComponent.prototype.openDialogFolhaPonto = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialog_dialog_folha_ponto_dialog_folha_ponto_component__["a" /* DialogFolhaPontoComponent */], {
            width: '800px',
            data: {
                id: this.idFrequencia
            }
        });
    };
    BtAcaoComponent.prototype.downloadPDF = function () {
        this.frequenciaService.downloadPDF(this.idFrequencia).subscribe(function (response) {
            var url = window.URL.createObjectURL(response);
            var type = response.type.split("/");
            var a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.href = url;
            a.download = "frequencia." + type[1];
            a.click();
        });
    };
    BtAcaoComponent.prototype.downloadAnexo = function () {
        this.frequenciaService.downloadAnexo(this.idFrequencia).subscribe(function (response) {
            var url = window.URL.createObjectURL(response);
            var type = response.type.split("/");
            var a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.href = url;
            a.download = "frequencia." + type[1];
            a.click();
        });
    };
    BtAcaoComponent.prototype.downloadFrequencia = function () {
        this.fileService.downloadFileFrequencia(this.idFrequencia).subscribe(function (response) {
            var url = window.URL.createObjectURL(response);
            var type = response.type.split("/");
            var a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.href = url;
            a.download = "frequencia." + type[1];
            a.click();
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_5__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Arquivo nÃ£o localizado", __WEBPACK_IMPORTED_MODULE_6__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    /**
     * MÃ©todo que valida frequÃªncia
     */
    BtAcaoComponent.prototype.validarFrequencia = function () {
        var _this = this;
        this.frequenciaService.validarFrequencia(this.idFrequencia).subscribe(function (response) {
            _this.isFolhaValidada = response.validado;
            _this.isDisponibilizar = response.idDisponibilizada;
            _this.atualizarGrid();
            __WEBPACK_IMPORTED_MODULE_5__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("FrequÃªncia validada com sucesso!", __WEBPACK_IMPORTED_MODULE_6__model_alert_type__["a" /* AlertType */].Success);
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_5__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_6__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    BtAcaoComponent.prototype.disponibilizarFolha = function () {
        var _this = this;
        this.frequenciaService.disponiblizarFolha(this.idFrequencia).pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["d" /* take */])(1)).subscribe(function (response) {
            _this.isDisponibilizar = true;
            _this.isFolhaValidada = true;
            __WEBPACK_IMPORTED_MODULE_5__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("FrequÃªncia disponibilizada com sucesso!", __WEBPACK_IMPORTED_MODULE_6__model_alert_type__["a" /* AlertType */].Success);
        }, function (error) {
            var mensagem = error.error.message;
            if (!mensagem) {
                mensagem = "Erro sistema estÃ¡ sem internet!";
            }
            __WEBPACK_IMPORTED_MODULE_5__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_6__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    BtAcaoComponent.prototype.atualizarGrid = function () {
        this.updateGrid.emit("update");
    };
    BtAcaoComponent.prototype.preencheCamposNavigate = function () {
        this.matricula = this._avRoute.snapshot.queryParamMap.get("matricula");
        this.matriculaPesquisa = this._avRoute.snapshot.queryParamMap.get("matriculaPesquisa");
        this.isVoltar = this._avRoute.snapshot.queryParamMap.get("voltar");
        this.competencia = this._avRoute.snapshot.queryParamMap.get("competencia");
        this.competenciaPesquisa = this._avRoute.snapshot.queryParamMap.get("competenciaPesquisa");
        this.situacaoFrequencia = this._avRoute.snapshot.queryParamMap.get("situacaoFrequencia");
        this.codProjetoPesquisa = this._avRoute.snapshot.queryParamMap.get("codProjetoPesquisa");
        this.anexo = this._avRoute.snapshot.queryParamMap.get("anexo");
        this.pageIndex = this._avRoute.snapshot.queryParamMap.get("pageIndex");
        var codProjeto = this._avRoute.snapshot.queryParamMap.get("codProjeto");
        this.situacaoFuncionario = this._avRoute.snapshot.queryParamMap.get("situacaoFuncionario");
        if (Number(codProjeto) == 1000) {
            this.isCodProjetoSaeb = true;
        }
    };
    BtAcaoComponent.prototype.voltar = function () {
        this._router.navigate(['/frequencia'], {
            queryParams: {
                matricula: this.matriculaPesquisa,
                competencia: this.competenciaPesquisa,
                situacaoFrequencia: this.situacaoFrequencia,
                codProjeto: this.codProjetoPesquisa,
                returnADMF: true,
                anexo: this.anexo,
                pageIndex: this.pageIndex,
                returnUrl: this._router.url,
                situacaoFuncionario: this.situacaoFuncionario
            },
            skipLocationChange: true
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('frequencia'),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "frequencia", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('enableAnexo'),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "enableAnexo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isFolhaValidada'),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "isFolhaValidada", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('id'),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "idFrequencia", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isDisponibilizar'),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "isDisponibilizar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isCodProjetoSaeb'),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "isCodProjetoSaeb", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isGeracaoAutomatica'),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "isGeracaoAutomatica", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BtAcaoComponent.prototype, "updateGrid", void 0);
    BtAcaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bt-acao',
            template: __webpack_require__("./src/app/administrar-ponto/bt-acao/bt-acao.component.html"),
            styles: [__webpack_require__("./src/app/administrar-ponto/bt-acao/bt-acao.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_frequencia_service__["a" /* FrequenciaService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_7__service_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_8__service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_10__angular_router__["d" /* Router */]])
    ], BtAcaoComponent);
    return BtAcaoComponent;
}());



/***/ }),

/***/ "./src/app/administrar-ponto/lancar-ponto-atraso/lancar-ponto-atraso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <app-funcionario></app-funcionario>\r\n\r\n        <div class=\"row\">\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-danger\">\r\n                    <h4 class=\"card-title\">Registrar FrequÃªncia Manual</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n\r\n                    <form [formGroup]=\"newForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-5\">\r\n                                <label for=\"filter\">Data</label>\r\n                                <input matInput [matDatepicker]=\"picker\" formControlName=\"data\" class=\"form-control\" name=\"data\" id=\"data\" readonly>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #picker></mat-datepicker>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <label for=\"filter\">Hora</label>\r\n                                <input matInput formControlName=\"hora\" [textMask]=\"{mask: maskTime}\" class=\"form-control\" name=\"hora\" id=\"hora\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n\r\n                            <div class=\"col-md-5\">\r\n                                <label for=\"filter\">Justificativa</label>\r\n                                <mat-select class=\"form-control\" formControlName=\"justificativa\" placeholder=\"Selecione...\" name=\"justificativa\">\r\n                                    <mat-option *ngFor=\"let item of justificativas\" [value]=\"item\">\r\n                                        {{item}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <label for=\"filter\">ObservaÃ§Ã£o</label>\r\n                                <textarea matInput formControlName=\"observacao\" class=\"form-control\" name=\"observacao\" id=\"observacao\"></textarea>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <button mat-raised-button class=\"btn btn-info pull-left\" (click)=\"adicionar()\">\r\n                            <i class=\"material-icons\">add</i>Adicionar</button>\r\n                        <div *ngIf=\"pesquisaAtiva\">\r\n                            <table class=\"table table-hover\" id=\"marcacoes\">\r\n                                <thead class=\"text-primary\">\r\n                                    <th>Data</th>\r\n                                    <th>Hora</th>\r\n                                    <th>Justificativa</th>\r\n                                    <th>ObservaÃ§Ã£o</th>\r\n                                    <th>Remover</th>\r\n                                </thead>\r\n                                <tbody *ngFor=\"let m of marcacoes;let i=index\">\r\n                                    <td>{{m.data}}</td>\r\n                                    <td>{{m.hora}}</td>\r\n                                    <td>{{m.justificativa}}</td>\r\n                                    <td>{{m.observacao}}</td>\r\n                                    <td><span class=\"btn btn-danger btn-link btn-sm btn-just-icon\" (click)=\"remover(i)\"  ><i class=\"material-icons\">delete</i></span></td>\r\n                                </tbody>\r\n                            </table>\r\n                            <div [hidden]=\"!loading\" align=\"center\" style=\"width: 100%\">\r\n                                <h4>Salvando...</h4>\r\n                                <mat-spinner [diameter]=\"40\"></mat-spinner>\r\n                            </div>\r\n\r\n                            <div [hidden]=\"loading\">\r\n                                <button mat-raised-button (click)=\"registrar()\" class=\"btn btn-info pull-left\">\r\n                                    <i class=\"material-icons\">done</i>Registrar</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/administrar-ponto/lancar-ponto-atraso/lancar-ponto-atraso.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/administrar-ponto/lancar-ponto-atraso/lancar-ponto-atraso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LancarPontoAtrasoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_funcionario_service__ = __webpack_require__("./src/app/service/funcionario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LancarPontoAtrasoComponent = (function () {
    function LancarPontoAtrasoComponent(funcionarioService, frequenciaService, datePipe, emitirEventoService, user) {
        this.funcionarioService = funcionarioService;
        this.frequenciaService = frequenciaService;
        this.datePipe = datePipe;
        this.emitirEventoService = emitirEventoService;
        this.user = user;
        this.funcionario = {};
        this.justificativas = ["Esquecimento", "Defeito Sistema", "Colaborador Sem Internet"];
        this.marcacoes = [];
        this.pesquisaAtiva = false;
        this.loading = false;
        this.maskTime = [/\d/, /\d/, ':', /\d/, /\d/];
        this.buildForm();
    }
    LancarPontoAtrasoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emitirEventoService.mensagem.subscribe(function (obj) {
            if (obj && obj.type === 'funcionario') {
                _this.funcionario = obj.data;
                // console.log(obj.data);
            }
        });
    };
    // registra frequencias no servidor
    LancarPontoAtrasoComponent.prototype.registrar = function () {
        var _this = this;
        if (this.marcacoes.length > 0) {
            this.loading = true;
            var array_1 = [];
            this.verificaPreenchimentoMatricula();
            this.marcacoes.forEach(function (element) {
                var obj = {
                    justificativa: element.justificativa,
                    observacao: element.observacao,
                    dataMarcacao: element.dataMarcacao
                };
                array_1.push(obj);
            });
            this.frequenciaService.registrarPontoEmAtraso(array_1, this.getMatricula()).subscribe(function (val) {
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(_this.getMensagemSucesso(array_1), __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Success);
                _this.limparForm();
                _this.marcacoes = [];
                _this.verificarPesquisaAtiva();
                _this.loading = false;
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
                _this.loading = false;
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Existe um erro no registro", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
        }
    };
    LancarPontoAtrasoComponent.prototype.limparForm = function () {
        this.newForm.controls['justificativa'].patchValue("");
        this.newForm.controls['hora'].patchValue("");
        this.newForm.controls['observacao'].patchValue("");
    };
    LancarPontoAtrasoComponent.prototype.buildForm = function () {
        this.newForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'justificativa': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'data': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'hora': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'observacao': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
    };
    // adiciona uma marcao na grid de maecacoes
    LancarPontoAtrasoComponent.prototype.adicionar = function () {
        if (this.validarAdcionar()) {
            return false;
        }
        if (this.verificarHorasAdicionadas()) {
            this.preencherObj();
            this.pesquisaAtiva = true;
            this.newForm.controls['hora'].patchValue("");
        }
    };
    // verifica se data ea hora jÃ¡ foi adicionada na grid
    LancarPontoAtrasoComponent.prototype.verificarHorasAdicionadas = function () {
        var _this = this;
        var ret = true;
        this.marcacoes.forEach(function (element) {
            if (element.hora == _this.newForm.value.hora && element.data == _this.datePipe.transform(_this.newForm.value.data, 'dd/MM/yyyy')) {
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Data e hora jÃ¡ adicionada", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
                ret = false;
            }
        });
        return ret;
    };
    //  remove uma linha da grid
    LancarPontoAtrasoComponent.prototype.remover = function (index) {
        this.marcacoes.splice(index, 1);
        this.verificarPesquisaAtiva();
    };
    LancarPontoAtrasoComponent.prototype.isFuncionarioRH = function () {
        return this.user.hasPermission("acessoRH");
    };
    //  metodo que preenche objeto para adicionar na lista da grid
    LancarPontoAtrasoComponent.prototype.preencherObj = function () {
        var obj = {
            justificativa: this.newForm.value.justificativa,
            observacao: this.newForm.value.observacao,
            dataMarcacao: this.datePipe.transform(this.newForm.value.data, 'dd/MM/yyyy') + " " + this.newForm.value.hora,
            data: this.datePipe.transform(this.newForm.value.data, 'dd/MM/yyyy'),
            hora: this.newForm.value.hora
        };
        this.marcacoes.push(obj);
    };
    //  valida registro antes de adicionar na grid
    LancarPontoAtrasoComponent.prototype.validarAdcionar = function () {
        if (!this.newForm.value.data) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Seleciona uma data", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
            return true;
        }
        if (!this.newForm.value.hora) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Digite um horario", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
            return true;
        }
        if (!this.newForm.value.justificativa) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Seleciona uma justificativa", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
            return true;
        }
    };
    // verifica se funcionario Ã© do rh e se for preenche matricula
    LancarPontoAtrasoComponent.prototype.verificaPreenchimentoMatricula = function () {
        if (!this.funcionario.codigoDominio && !this.isFuncionarioRH()) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor informe a matricula!", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
    };
    // verifica se matricula esta na sessao
    LancarPontoAtrasoComponent.prototype.getMatricula = function () {
        var matricula;
        if (this.funcionario.codigoDominio) {
            matricula = this.funcionario.codigoDominio;
        }
        else {
            matricula = Number(JSON.parse(this.user.isLogged()).matricula);
        }
        return matricula;
    };
    // retorna mensagem de acordo com quantidade de registro
    LancarPontoAtrasoComponent.prototype.getMensagemSucesso = function (array) {
        if (array.length > 0) {
            return "FrequÃªncias salvas com sucesso!";
        }
        else {
            return "FrequÃªncia salva com sucesso!";
        }
    };
    // verica a lista para habilitar ou desabilitar a grid apÃ³s resgistrar ou remover
    LancarPontoAtrasoComponent.prototype.verificarPesquisaAtiva = function () {
        if (this.marcacoes.length == 0) {
            this.pesquisaAtiva = false;
        }
    };
    LancarPontoAtrasoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lancar-ponto-atraso',
            template: __webpack_require__("./src/app/administrar-ponto/lancar-ponto-atraso/lancar-ponto-atraso.component.html"),
            styles: [__webpack_require__("./src/app/administrar-ponto/lancar-ponto-atraso/lancar-ponto-atraso.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_funcionario_service__["a" /* FuncionarioService */], __WEBPACK_IMPORTED_MODULE_5__service_frequencia_service__["a" /* FrequenciaService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_7__service_emitir_evento_service__["a" /* EmitirEventoService */], __WEBPACK_IMPORTED_MODULE_8__service_user_data_service__["a" /* UserDataService */]])
    ], LancarPontoAtrasoComponent);
    return LancarPontoAtrasoComponent;
}());



/***/ }),

/***/ "./src/app/administrar-ponto/marcacoes/marcacoes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n    <table class=\"table\" id=\"marcacoes\">\r\n        <thead class=\"text-primary\">\r\n\r\n            <th>Status</th>\r\n            <th>Entrada</th>\r\n            <th>Saida</th>\r\n            <th *ngIf=\"!isFolhaValidada\">Validar</th>\r\n            <th>Total Horas</th>\r\n            <th>Anexos</th>\r\n            <th>Justificativa</th>\r\n        </thead>\r\n        <tbody *ngFor=\"let f of frequencia\">\r\n            <tr class=\"card-header card-header-danger\">\r\n                <td colspan=\"7\">\r\n                    {{f.dataDia | dateHelper: 'dayOfWeek'}} - {{f.dataDia }}\r\n                    <span class=\"pull-right\">\r\n                        Horas Trabalhadas {{ f.horasTrabalhadas | dateHelper: 'time'}}\r\n                        <!-- | Horas Abonadas {{ f.saldoAbono | dateHelper: 'time'}} -->\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span (click)=\"openDialogHistorico(f)\" style=\"cursor:pointer;\" *ngIf=\"f.id\">\r\n                        <i class=\"material-icons\">event_note</i>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr *ngIf=\"!f.abonos || f.abonos.length == 0 && !f.marcacoes\">\r\n                <td>{{f.observacao}}</td>\r\n            </tr>\r\n            <tr *ngFor=\"let a of f.abonos\">\r\n                <td>{{a.descTipoMovimento}}</td>\r\n                <td>\r\n                    <input [(ngModel)]=\"a.horaInicio\" style=\"text-align: center;width: 60px;\"\r\n                        [textMask]=\"{mask: maskTime}\" disabled>\r\n                </td>\r\n                <td>\r\n                    <input [(ngModel)]=\"a.horaFim\" style=\"text-align: center;width: 60px;\" [textMask]=\"{mask: maskTime}\"\r\n                        disabled>\r\n                </td>\r\n\r\n                <td>\r\n                    <!-- Logica de aprovaÃ§Ã£o falta legal -->\r\n                    <span *ngIf=\"(!f.folhaValidada && !a.validado) \r\n                                && (hasPermission('validarRegFreq') \r\n                                && a.descJustificativa!='ATESTADO MÃ‰DICO' \r\n                                && a.descJustificativa!='OUTRAS FALTAS'\r\n                                && a.descJustificativa!='VIAGEM A SERVIÃ‡O')\" title=\"Aprovar ou Reprovar\"\r\n                        (click)=\"openDialogAprovarAbono(a)\" style=\"cursor:pointer;\">\r\n                        <i class=\"material-icons\">done</i>\r\n                    </span>\r\n                    <!-- Logica de aprovaÃ§Ã£o dos atestado medicos -->\r\n                    <span *ngIf=\"hasPermission('atestadoSRF') \r\n                                 && !a.validado \r\n                                 && a.descJustificativa=='ATESTADO MÃ‰DICO'\r\n                                 && a.descJustificativa!='OUTRAS FALTAS' \r\n                                 && a.descJustificativa!='VIAGEM A SERVIÃ‡O'\" title=\"Aprovar ou Reprovar\"\r\n                        (click)=\"openDialogAprovarAtestadoOrOutrasFaltas(a)\" style=\"cursor:pointer;\">\r\n                        <i class=\"material-icons\">done</i>\r\n                    </span>\r\n                    <!-- Logica de aprovaÃ§Ã£o dos outras faltas e viagem-->\r\n                    <span *ngIf=\"hasPermission('outrasfaltasSRF')  \r\n                                 && !a.validado\r\n                                 && a.descJustificativa!='ATESTADO MÃ‰DICO'\r\n                                 && ( a.descJustificativa=='OUTRAS FALTAS'\r\n                                 || a.descJustificativa=='VIAGEM A SERVIÃ‡O' )\" title=\"Aprovar ou Reprovar\"\r\n                        (click)=\"openDialogAprovarAtestadoOrOutrasFaltas(a)\" style=\"cursor:pointer;\">\r\n                        <i class=\"material-icons\">done</i>\r\n                    </span>\r\n                </td>\r\n                <td>{{a.horasAbonadas}}</td>\r\n                <td>\r\n                    <span *ngIf=\"a.sizeFile\" (click)=\"downloadAnexoAbono(a.idAtestado)\" style=\"cursor: pointer;\">\r\n                        <i class=\"material-icons\">archive</i>\r\n                    </span>\r\n                </td>\r\n                <td>{{a.descJustificativa}}</td>\r\n            </tr>\r\n            <tr *ngFor=\"let m of f.marcacoes\">\r\n                <td>\r\n                    <span>{{getDescTipoMovimento(m.hrEntrada,m.hrSaida)}}</span>\r\n                </td>\r\n                <td *ngIf=\"m.hrEntrada\">\r\n                    <input [(ngModel)]=\"m.hrEntrada.horaMarcacao\"\r\n                        (change)=\"changeSalvarHorarios(m,m.hrEntrada,f.dataDia)\" style=\"text-align: center;width: 60px;\"\r\n                        name=\"base\" id=\"entrada\" [textMask]=\"{mask: maskTime}\"\r\n                        disabled=\"{{ isEnableInput(m.hrEntrada.tipoMvto,f.folhaValidada) }}\" />\r\n\r\n                    <span (click)=\"openDialogConfirm(m.hrEntrada.id)\" style=\"cursor:pointer; margin-top: 50px;\"\r\n                        *ngIf=\"isEnableExcluir(m.hrEntrada.tipoMvto,f.folhaValidada)\">\r\n                        <i class=\"material-icons\">delete_forever</i>\r\n                    </span>\r\n                    <span title=\"Reprovar\" *ngIf=\"hasPermission('validarRegFreq') && m.hrEntrada && !f.folhaValidada\"\r\n                        (click)=\"openDialogReprovar(m.hrEntrada, f.dataDia )\" style=\"cursor:pointer;\">\r\n                        <i class=\"material-icons\" *ngIf=\"m.hrEntrada.status != 'REPROVADO' \">not_interested</i>\r\n                    </span>\r\n                </td>\r\n                <td *ngIf=\"m.hrSaida\">\r\n                    <input matInput [(ngModel)]=\"m.hrSaida.horaMarcacao\"\r\n                        (change)=\"changeSalvarHorarios(m,m.hrSaida,f.dataDia)\" style=\"text-align: center;width: 60px;\"\r\n                        name=\"base\" id=\"saida\" [textMask]=\"{mask: maskTime}\"\r\n                        disabled=\"{{ isEnableInput(m.hrSaida.tipoMvto,f.folhaValidada) }}\" />\r\n                    <span (click)=\"openDialogConfirm(m.hrSaida.id)\" style=\"cursor:pointer;\"\r\n                        *ngIf=\"isEnableExcluir(m.hrSaida.tipoMvto,f.folhaValidada)\">\r\n                        <i class=\"material-icons\">delete_forever</i>\r\n                    </span>\r\n                    <span title=\"Reprovar\" *ngIf=\"hasPermission('validarRegFreq') && m.hrSaida && !f.folhaValidada\"\r\n                        (click)=\"openDialogReprovar(m.hrSaida, f.dataDia )\" style=\"cursor:pointer;\">\r\n                        <i class=\"material-icons\" *ngIf=\"m.hrEntrada.status != 'REPROVADO' \">not_interested</i>\r\n                    </span>\r\n                </td>\r\n                <td *ngIf=\"!f.folhaValidada\">\r\n                    <span title=\"Aprovar ou Reprovar\" *ngIf=\"hasPermission('validarRegFreq') && m.hrEntrada\"\r\n                        (click)=\"openDialogAprovar(m,f.dataDia)\" style=\"cursor:pointer;\">\r\n                        <i class=\"material-icons\">done</i>\r\n                    </span>\r\n                </td>\r\n                <td>\r\n                    <span *ngIf=\"m.hrEntrada && m.hrSaida\">{{m.hrTrabalhadas}}</span>\r\n                </td>\r\n                <td>\r\n\r\n                </td>\r\n                <td>\r\n                    <span *ngIf=\"m.hrEntrada\">{{ m.justificativa }}</span>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>"

/***/ }),

/***/ "./src/app/administrar-ponto/marcacoes/marcacoes.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-header-blue {\n  background-color: #014D7C;\n  color: white; }\n\n.card-header-blue:hover {\n  background-color: #014D7C;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/administrar-ponto/marcacoes/marcacoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcacoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_dialog_historico_administrar_ponto_dialog_historico_administrar_ponto_component__ = __webpack_require__("./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_marcacoes_service__ = __webpack_require__("./src/app/service/marcacoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_abono_service__ = __webpack_require__("./src/app/service/abono.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialog_dialog_aprovar_marcacao_dialog_aprovar_marcacao_component__ = __webpack_require__("./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_marcacao__ = __webpack_require__("./src/app/model/marcacao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialog_dialog_confirm_dialog_confirm_component__ = __webpack_require__("./src/app/dialog/dialog-confirm/dialog-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dialog_dialog_aprovar_abono_dialog_aprovar_abono_component__ = __webpack_require__("./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dialog_dialog_reprovar_marcacoes_dialog_reprovar_marcacoes_component__ = __webpack_require__("./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MarcacoesComponent = (function () {
    function MarcacoesComponent(dialog, user, fileService, marcacao, frequenciaService, marcacoesService, abonoService) {
        this.dialog = dialog;
        this.user = user;
        this.fileService = fileService;
        this.marcacao = marcacao;
        this.frequenciaService = frequenciaService;
        this.marcacoesService = marcacoesService;
        this.abonoService = abonoService;
    }
    MarcacoesComponent.prototype.ngOnInit = function () {
    };
    /**
    * Metodo que habilita e desabilita o os input
    * @param tipo
    * @param isFolhaValidada
    */
    MarcacoesComponent.prototype.isEnableInput = function (tipo, isFolhaValidada) {
        if (isFolhaValidada) {
            this.isFolhaValidada = true;
            return true;
        }
        else if (tipo != 'NORMAL' && !isFolhaValidada) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Metodo que habilita e desabilita o excluir marcaÃ§Ãµes
     * @param tipo
     * @param isFolhaValidada
     */
    MarcacoesComponent.prototype.isEnableExcluir = function (tipo, isFolhaValidada) {
        if (this.hasPermission('removeRegFreq')) {
            if (isFolhaValidada) {
                return false;
            }
            else if (tipo == 'NORMAL' && (isFolhaValidada == null || !isFolhaValidada)) {
                return false;
            }
            else {
                return true;
            }
        }
        return false;
    };
    MarcacoesComponent.prototype.hasPermission = function (permission) {
        return this.user.hasPermission(permission);
    };
    MarcacoesComponent.prototype.getDescTipoMovimento = function (entrada, saida) {
        if (entrada && !saida) {
            return entrada.tipoMvtoDesc;
        }
        else if (!entrada && saida) {
            return entrada.tipoMvtoDesc;
        }
        else if (entrada && saida && entrada.tipoMvtoDesc == saida.tipoMvtoDesc) {
            return entrada.tipoMvtoDesc;
        }
        else if (entrada && saida) {
            return entrada.tipoMvtoDesc + " / " + saida.tipoMvtoDesc;
        }
    };
    MarcacoesComponent.prototype.openDialogHistorico = function (item) {
        var idDia = item.id;
        if (item && item.id) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialog_dialog_historico_administrar_ponto_dialog_historico_administrar_ponto_component__["a" /* DialogHistoricoAdministrarPontoComponent */], {
                width: '1000px',
                data: {
                    history: this.marcacoesService.getHistory(idDia),
                    historyAbono: this.abonoService.getHistory(idDia),
                    dataDia: item.dataDia
                }
            });
        }
    };
    /**
   * Salva os horÃ¡rios quando tira o foco
   * e recarrega a pesquisa
   * @param obj
   * @param horaMarcacao
   * @param idDia
   * @param dataMarcacao
   */
    MarcacoesComponent.prototype.changeSalvarHorarios = function (obj, marcacao, dataDia) {
        if (this.validarMarcacoes(obj)) {
            if (marcacao) {
                this.marcacao = this.preencherMarcacao(marcacao, dataDia);
                this.marcacoesService.saveMarcacao(this.marcacao).subscribe(function (val) {
                    __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('MarcaÃ§Ã£o atualizado com Sucesso!', __WEBPACK_IMPORTED_MODULE_7__model_alert_type__["a" /* AlertType */].Success);
                }, function (error) {
                    __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Internal Server Error", __WEBPACK_IMPORTED_MODULE_7__model_alert_type__["a" /* AlertType */].Error);
                });
            }
        }
    };
    /**
    * Valida a marcaÃ§Ãµes
    * @param obj
    */
    MarcacoesComponent.prototype.validarMarcacoes = function (obj) {
        if (obj.hrEntrada && obj.hrSaida) {
            var horaInicio = obj.hrEntrada.horaMarcacao;
            var horaSaida = obj.hrSaida.horaMarcacao;
            var horaIni = void 0;
            var horaSom = void 0;
            var hrIni = void 0;
            var hrFim = void 0;
            var minIni = void 0;
            var minFim = void 0;
            if (horaInicio) {
                horaIni = horaInicio.split(':');
                hrIni = parseInt(horaIni[0], 10);
                minIni = parseInt(horaIni[1], 10);
            }
            else {
                hrIni = 0;
            }
            if (horaSaida) {
                horaSom = horaSaida.split(':');
                hrFim = parseInt(horaSom[0], 10);
                minFim = parseInt(horaSom[1], 10);
            }
            else {
                hrIni = 0;
            }
            if (hrIni > hrFim) {
                __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("A data de inicio nÃ£o pode ser maior que a data fim!", __WEBPACK_IMPORTED_MODULE_7__model_alert_type__["a" /* AlertType */].Error);
                return false;
            }
            if (hrIni == hrFim && minIni == minFim) {
                __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("MacaÃ§Ãµes iguais!", __WEBPACK_IMPORTED_MODULE_7__model_alert_type__["a" /* AlertType */].Error);
                return false;
            }
        }
        return true;
    };
    /**
     * Abre o modal de aprovaÃ§Ã£o
     * @param objHrEntrada
     * @param objHrSaida
     * @param idDia
     * @param dataDia
     */
    MarcacoesComponent.prototype.openDialogAprovar = function (marcacoes, dataDia) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__dialog_dialog_aprovar_marcacao_dialog_aprovar_marcacao_component__["a" /* DialogAprovarMarcacaoComponent */], {
            width: '600px',
            data: {
                marcacoes: marcacoes,
                dataDia: dataDia,
                //idFrequencia:this.frequencia
                all: false
            }
        });
    };
    // preenche o obj marcaÃ§Ã£o 
    MarcacoesComponent.prototype.preencherMarcacao = function (obj, dataDia) {
        var m = new __WEBPACK_IMPORTED_MODULE_9__model_marcacao__["a" /* Marcacao */]();
        m.id = obj.id;
        m.dataMarcacao = dataDia + " " + obj.horaMarcacao;
        m.usuarioAtualizacao = this.user.matricula();
        return m;
    };
    /**
  * Dialog para remover a marcaÃ§Ã£o
  * @param id
  */
    MarcacoesComponent.prototype.openDialogConfirm = function (id) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__dialog_dialog_confirm_dialog_confirm_component__["a" /* DialogConfirmComponent */], {
            width: '500px',
            data: {
                id: id,
                marcacao: true
            }
        });
    };
    /**
     * Dialog para remover a marcaÃ§Ã£o
     * @param id
     */
    MarcacoesComponent.prototype.openDialogAprovarAbono = function (obj) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__dialog_dialog_aprovar_abono_dialog_aprovar_abono_component__["a" /* DialogAprovarAbonoComponent */], {
            width: '500px',
            data: {
                obj: obj,
                rh: true
            }
        });
    };
    /**
   * Dialog para remover a marcaÃ§Ã£o
   * @param id
   */
    MarcacoesComponent.prototype.openDialogAprovarAtestadoOrOutrasFaltas = function (obj) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__dialog_dialog_aprovar_abono_dialog_aprovar_abono_component__["a" /* DialogAprovarAbonoComponent */], {
            width: '500px',
            data: {
                obj: obj,
                rh: false,
                idFrequencia: this.idFrequencia
            }
        });
    };
    // habilita o campo paa ediÃ§Ã£o 
    MarcacoesComponent.prototype.habilitarMarcacoes = function (tipo) {
        if (tipo == 'Em Atraso' || tipo == 'Atestado') {
            return false;
        }
        else {
            return true;
        }
    };
    // habilita o icone remover
    MarcacoesComponent.prototype.habilitarRemoverMarcacoes = function (tipo) {
        if (tipo == 'Em Atraso' || tipo == 'Atestado') {
            return true;
        }
        else {
            return false;
        }
    };
    MarcacoesComponent.prototype.downloadAnexoAbono = function (idAnexo) {
        this.fileService.downloadFileAtestado(idAnexo).pipe(Object(__WEBPACK_IMPORTED_MODULE_15_rxjs_operators__["a" /* first */])()).subscribe(function (response) {
            var url = window.URL.createObjectURL(response);
            var type = response.type.split("/");
            var a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.href = url;
            a.download = "atestado." + type[1];
            a.click();
        });
    };
    /**
     * @param marcacoes
     * @param dataDia
     */
    MarcacoesComponent.prototype.openDialogReprovar = function (marcacao, dataDia) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_13__dialog_dialog_reprovar_marcacoes_dialog_reprovar_marcacoes_component__["a" /* DialogReprovarMarcacoesComponent */], {
            width: '600px',
            data: {
                marcacao: marcacao,
                dataDia: dataDia,
                observacao: null
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('frequencia'),
        __metadata("design:type", Object)
    ], MarcacoesComponent.prototype, "frequencia", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('maskTime'),
        __metadata("design:type", Object)
    ], MarcacoesComponent.prototype, "maskTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isFolhaValidada'),
        __metadata("design:type", Object)
    ], MarcacoesComponent.prototype, "isFolhaValidada", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('idFrequencia'),
        __metadata("design:type", Object)
    ], MarcacoesComponent.prototype, "idFrequencia", void 0);
    MarcacoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-marcacoes',
            template: __webpack_require__("./src/app/administrar-ponto/marcacoes/marcacoes.component.html"),
            styles: [__webpack_require__("./src/app/administrar-ponto/marcacoes/marcacoes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_14__service_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_9__model_marcacao__["a" /* Marcacao */], __WEBPACK_IMPORTED_MODULE_12__service_frequencia_service__["a" /* FrequenciaService */],
            __WEBPACK_IMPORTED_MODULE_4__service_marcacoes_service__["a" /* MarcacoesService */], __WEBPACK_IMPORTED_MODULE_5__service_abono_service__["a" /* AbonoService */]])
    ], MarcacoesComponent);
    return MarcacoesComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".separator{\r\n    height: 40px !important;\r\n    widows: 100% !important;\r\n}\r\n\r\n::ng-deep mat-row:hover{\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n::ng-deep tbody:hover{\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n  \r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.data.logout();
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_data_service__["a" /* UserDataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__administrar_ponto_administrar_ponto_module__ = __webpack_require__("./src/app/administrar-ponto/administrar-ponto.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__banco_de_horas_banco_de_horas_module__ = __webpack_require__("./src/app/banco-de-horas/banco-de-horas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__confirm_email_confirm_email_module__ = __webpack_require__("./src/app/confirm-email/confirm-email.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__registrar_ponto_registrar_ponto_module__ = __webpack_require__("./src/app/registrar-ponto/registrar-ponto.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_auth_guard_service__ = __webpack_require__("./src/app/service/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_authorization_service__ = __webpack_require__("./src/app/service/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_interceptor_service__ = __webpack_require__("./src/app/service/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__ = __webpack_require__("./src/app/privacy-policy/privacy-policy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_16__login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__registrar_ponto_registrar_ponto_module__["a" /* RegistrarPontoModule */],
                __WEBPACK_IMPORTED_MODULE_9__administrar_ponto_administrar_ponto_module__["a" /* AdministrarPontoModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__banco_de_horas_banco_de_horas_module__["a" /* BancoDeHorasModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_14__confirm_email_confirm_email_module__["a" /* ConfirmEmailModule */],
                __WEBPACK_IMPORTED_MODULE_0__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatProgressSpinnerModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__service_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_21__service_user_data_service__["a" /* UserDataService */], __WEBPACK_IMPORTED_MODULE_19__service_authorization_service__["a" /* AuthorizationService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* HashLocationStrategy */] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_20__service_interceptor_service__["a" /* InterceptorService */], multi: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_email_confirm_email_component__ = __webpack_require__("./src/app/confirm-email/confirm-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy_component__ = __webpack_require__("./src/app/privacy-policy/privacy-policy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        redirectTo: 'registrar-ponto',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'confirm-email/:id', component: __WEBPACK_IMPORTED_MODULE_6__confirm_email_confirm_email_component__["a" /* ConfirmEmailComponent */] },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_7__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/banco-de-horas/banco-de-horas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-danger\">\r\n            <h4 class=\"card-title\">Banco de Horas Por Projeto</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form class=\"filter-full-width\" form [formGroup]=\"form\">\r\n              <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <label for=\"filter\">MatrÃ­cula:</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"matricula\" id=\"matricula\" >\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <label for=\"filter\">MÃªs Ano:</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"competencia\" id=\"competencia\"\r\n                  [textMask]=\"{mask: mask}\" required>\r\n              </div>\r\n            </div>\r\n            </form>\r\n            <br />\r\n            <app-projetos></app-projetos>\r\n            <span style=\"color:red\">Campo ObrigatÃ³rio</span> \r\n            <div class=\"row\">\r\n              <button mat-raised-button (click)=\"pesquisar()\" class=\"btn btn-info pull-left\" [hidden]=\"loading\">\r\n                <i class=\"material-icons\">search</i>Pesquisar</button>\r\n              </div>\r\n            <div [hidden]=\"!loading\" align=\"center\" style=\"width: 100%\">\r\n              <h4>Buscando...</h4>\r\n              <mat-spinner [diameter]=\"40\"></mat-spinner>\r\n            </div>\r\n            <br /> \r\n            <br />\r\n            <div [hidden]=\"loading || !mostrarPesquisa\">\r\n              <!-- <div [hidden]=\"loading && !mostrarPesquisa\" class=\"row\">\r\n                <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"downloadPDF()\" [hidden]=\"true\">\r\n                  <i class=\"material-icons\">print</i>Imprimir\r\n                </button>\r\n              </div> -->\r\n              <div [hidden]=\"loading || !mostrarPesquisa\" class=\"table-responsive\">\r\n                <mat-form-field>\r\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\r\n              </mat-form-field>\r\n                <mat-table #table [dataSource]=\"dados\" #sort=\"matSort\" matSort>\r\n                  <ng-container matColumnDef=\"{{ column.id }}\" *ngFor=\"let column of columnNames\">\r\n                    <mat-header-cell *matHeaderCellDef> {{column.value}} </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"> \r\n                    <span *ngIf=\"column.id!='acao'\">{{element[column.id]}}</span>\r\n                    <table  *ngIf=\"column.id=='acao'\">\r\n                        <td><span  title=\"Individual\" style=\"cursor: pointer;\" (click)=\"gerarRelatorioIndividual(element['matricula'])\"><i class=\"material-icons\">cloud_download</i></span></td>\r\n                        <td><span  *ngIf=\"individual\" title=\"Individual Mensal\" style=\"cursor: pointer;color: darkblue;\" (click)=\"gerarRelatorioIndividualMensal(element['matricula'])\"><i class=\"material-icons\">archive</i></span></td>\r\n                    </table>       \r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <mat-paginator [length]=\"dados.data.length\" #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n                <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"exportAsXLSX()\"\r\n                [hidden]=\"!mostrarPesquisa || loading\">\r\n                <img src=\"/assets/img/icons8-microsoft-excel-48.png\" style=\"width:23px\" />Exportar XLSX</button> \r\n              </div>\r\n            </div>\r\n          </div>\r\n         </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/banco-de-horas/banco-de-horas.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/banco-de-horas/banco-de-horas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancoDeHorasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_banco_de_horas_service__ = __webpack_require__("./src/app/service/banco-de-horas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_service_excel_service__ = __webpack_require__("./src/app/service/excel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BancoDeHorasComponent = (function () {
    function BancoDeHorasComponent(service, formBuilder, emitirEventoService, _excelService) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.emitirEventoService = emitirEventoService;
        this._excelService = _excelService;
        // projetos: any[];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]();
        this.funcionarios = [];
        this.funcionariosTrabalhando = [];
        this.funcionariosNaoTrabalhando = [];
        this.loading = false;
        this.mostrarPesquisa = false;
        this.orders = [];
        this.checkedList = [];
        // checked: boolean = false;
        this.displayedColumns = [];
        this.dados = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTableDataSource */]();
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTableDataSource */]();
        this.mask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,];
        this.individual = false;
    }
    BancoDeHorasComponent.prototype.ngOnInit = function () {
        var controls = this.orders.map(function (c) { return new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false); });
        this.form = this.formBuilder.group({
            interestSectors: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"](controls)
        });
        this.columns();
        this.obterProjetosSelecionados();
        this._buildForm();
    };
    BancoDeHorasComponent.prototype._buildForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            'competencia': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            'matricula': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
        });
    };
    BancoDeHorasComponent.prototype.pesquisar = function () {
        var _this = this;
        var obj = this.obj();
        if (this.checkedList && this.checkedList.length > 0 || obj.matricula) {
            this.loading = true;
            var obj_1 = this.obj();
            if ((obj_1.projetoIds && obj_1.competencia) || (obj_1.matricula && obj_1.competencia)) {
                this.individual = true;
            }
            else {
                this.individual = false;
            }
            this.service.obterBancoHoras(this.obj()).subscribe(function (items) {
                _this.funcionarios = items;
                _this.mostrarPesquisa = true;
                _this.dados = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTableDataSource */](_this.funcionarios);
                _this.dados.sort = _this.sort;
                _this.dados.paginator = _this.paginator;
                _this.loading = false;
            }, function (erro) {
                __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(erro.error.message, __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__["a" /* AlertType */].Error);
                _this.loading = false;
                _this.mostrarPesquisa = false;
                _this.clearList();
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor selecione pelo menos um projeto ou digite uma MatrÃ­cula", __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__["a" /* AlertType */].Error);
        }
    };
    BancoDeHorasComponent.prototype.obj = function () {
        return {
            projetoIds: this.codigoProjetoSelecionado(),
            matricula: this.form.controls['matricula'].value,
            competencia: __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].isNull(this.form.controls['competencia'].value, null)
        };
    };
    BancoDeHorasComponent.prototype.clearList = function () {
        this.funcionarios = [];
        this.funcionariosTrabalhando = [];
        this.funcionariosNaoTrabalhando = [];
    };
    BancoDeHorasComponent.prototype.gerarRelatorioIndividual = function (matricula) {
        var _this = this;
        this.loading = true;
        var obj = { matricula: matricula, competencia: __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].isNull(this.form.controls['competencia'].value, null) };
        this.service.downloadRelatorioBancoHorasindividual(obj).subscribe(function (response) {
            var url = window.URL.createObjectURL(response);
            var type = response.type.split("/");
            var a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.href = url;
            a.download = "relatorioBancoDeHorasIndividual." + type[1];
            a.click();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('NÃ£o existem registro a serem impressos !', __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__["a" /* AlertType */].Error);
        });
    };
    BancoDeHorasComponent.prototype.columns = function () {
        this.columnNames = [
            { id: 'matricula', value: 'Matricula' },
            { id: 'nome', value: 'Nome' },
            { id: 'projeto', value: 'Projeto' },
            { id: 'saldo', value: 'Banco de Horas' },
            { id: 'acao', value: 'AÃ§Ã£o' },
        ];
        this.displayedColumns = this.columnNames.map(function (x) { return x.id; });
    };
    BancoDeHorasComponent.prototype.applyFilter = function (value) {
        this.dados.filter = value.trim().toLowerCase();
    };
    BancoDeHorasComponent.prototype.obterProjetosSelecionados = function () {
        var _this = this;
        this.emitirEventoService.mensagem.subscribe(function (obj) {
            if (obj.type == 'projetos') {
                _this.checkedList = obj.data;
            }
        });
    };
    BancoDeHorasComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.loading = true;
        var dados = [];
        this.funcionarios.forEach(function (i) {
            dados.push({
                "MatrÃ­cula": i.matricula,
                "Nome": i.nome,
                "Projeto": i.projeto,
                "Banco de Horas": i.saldo
            });
            _this.loading = false;
        });
        this._excelService.exportAsExcelFile(dados, "banco_de_horas");
    };
    BancoDeHorasComponent.prototype.codigoProjetoSelecionado = function () {
        var i = 0;
        var ids = [];
        this.checkedList.forEach(function (item) {
            if (item) {
                if (item.codigoDominio) {
                    ids[i] = item.codigoDominio;
                    i++;
                }
            }
        });
        if (ids.length == 0) {
            ids = null;
        }
        return ids;
    };
    BancoDeHorasComponent.prototype.gerarRelatorioIndividualMensal = function (matricula) {
        var _this = this;
        this.loading = true;
        var obj = { matricula: matricula, competencia: __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].isNull(this.form.controls['competencia'].value, null) };
        if (!obj.matricula && !obj.competencia) {
            __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('Por favor digite a Matricula e MÃªs Ano Inicio!', __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        else if (!obj.competencia) {
            __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('Por favor digite MÃªs Ano Inicio!', __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        else if (!obj.matricula) {
            __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('Por favor digite a Matricula!', __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        this.service.downloadRelatorioBancoHorasindividualMensal(obj).subscribe(function (response) {
            var url = window.URL.createObjectURL(response);
            var type = response.type.split("/");
            var a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.href = url;
            a.download = "relatorioBancoDeHorasIndividualMensal." + type[1];
            a.click();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_3_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('NÃ£o existem registro a serem impressos !', __WEBPACK_IMPORTED_MODULE_4_app_model_alert_type__["a" /* AlertType */].Error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('paginator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatPaginator */])
    ], BancoDeHorasComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('sort'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatSort */])
    ], BancoDeHorasComponent.prototype, "sort", void 0);
    BancoDeHorasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-banco-de-horas',
            template: __webpack_require__("./src/app/banco-de-horas/banco-de-horas.component.html"),
            styles: [__webpack_require__("./src/app/banco-de-horas/banco-de-horas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_banco_de_horas_service__["a" /* BancoDeHorasService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6__service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_7_app_service_excel_service__["a" /* ExcelService */]])
    ], BancoDeHorasComponent);
    return BancoDeHorasComponent;
}());



/***/ }),

/***/ "./src/app/banco-de-horas/banco-de-horas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancoDeHorasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_banco_de_horas_service__ = __webpack_require__("./src/app/service/banco-de-horas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__administrar_ponto_administrar_ponto_module__ = __webpack_require__("./src/app/administrar-ponto/administrar-ponto.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__frequencia_frequencia_module__ = __webpack_require__("./src/app/frequencia/frequencia.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registrar_ponto_registrar_ponto_module__ = __webpack_require__("./src/app/registrar-ponto/registrar-ponto.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__banco_de_horas_component__ = __webpack_require__("./src/app/banco-de-horas/banco-de-horas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BancoDeHorasModule = (function () {
    function BancoDeHorasModule() {
    }
    BancoDeHorasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__frequencia_frequencia_module__["a" /* FrequenciaModule */],
                __WEBPACK_IMPORTED_MODULE_9__registrar_ponto_registrar_ponto_module__["a" /* RegistrarPontoModule */],
                __WEBPACK_IMPORTED_MODULE_6__administrar_ponto_administrar_ponto_module__["a" /* AdministrarPontoModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__administrar_ponto_administrar_ponto_module__["a" /* AdministrarPontoModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__banco_de_horas_component__["a" /* BancoDeHorasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__banco_de_horas_component__["a" /* BancoDeHorasComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_app_service_banco_de_horas_service__["a" /* BancoDeHorasService */]
            ]
        })
    ], BancoDeHorasModule);
    return BancoDeHorasModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__funcionario_funcionario_component__ = __webpack_require__("./src/app/components/funcionario/funcionario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_funcionario_service__ = __webpack_require__("./src/app/service/funcionario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__projetos_projetos_projetos_module__ = __webpack_require__("./src/app/components/projetos/projetos/projetos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projetos_projetos_projetos_component__ = __webpack_require__("./src/app/components/projetos/projetos/projetos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__diretives_has_permission__ = __webpack_require__("./src/app/diretives/has-permission.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_10__projetos_projetos_projetos_module__["a" /* ProjetosModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["q" /* MatOptionModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__funcionario_funcionario_component__["a" /* FuncionarioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projetos_projetos_projetos_component__["a" /* ProjetosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__diretives_has_permission__["a" /* HasPermissionDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__funcionario_funcionario_component__["a" /* FuncionarioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projetos_projetos_projetos_component__["a" /* ProjetosComponent */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["k" /* MatExpansionModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__service_funcionario_service__["a" /* FuncionarioService */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, <a href=\"http://www.flem.org.br/\" target=\"_blank\">FundaÃ§Ã£o LuÃ­s Eduardo MagalhÃ£es</a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/funcionario/funcionario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"card\">\r\n        <div class=\"card-header card-header-danger\">\r\n            <h4 class=\"card-title\">Buscar FuncionÃ¡rio</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <label for=\"filter\">MatrÃ­cula:</label>\r\n                    <input type=\"number\" value=\"{{ funcionario.codigoDominio }}\" (change)=\"buscar($event)\" class=\"form-control\" name=\"matricula\"\r\n                        id=\"matricula\" [disabled]=\"!userGestor || matricula\" required>\r\n                    <span style=\"color:red\" *ngIf=\"userGestor\">Campo ObrigatÃ³rio</span>\r\n                </div>\r\n                <div class=\"col-md-5\">\r\n                    <label for=\"filter\">FuncionÃ¡rio:</label>\r\n                    <input matInput style=\"color: black\" value=\"{{ funcionario.nome }}\" class=\"form-control\" name=\"funcionario\" id=\"funcionario\"\r\n                        disabled>\r\n                </div>\r\n                <div [hidden]=\"!loading\" class=\"col-md-5\" align=\"right\">\r\n                    <mat-spinner [diameter]=\"40\"></mat-spinner>\r\n                </div>\r\n            </div>\r\n\r\n            <div [hidden]=\"loading || !exibirdados\" class=\"row\" *hasPermission=\"['visualizarPaiInfFunc']\">\r\n                <br />\r\n                <div class=\"card-body\">\r\n                    <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                InformaÃ§Ãµes Adicionais\r\n                                <i class=\"material-icons\">arrow_drop_down</i>\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        <div class=\"container-fluid\" style=\"margin-bottom: 15px\">\r\n                            <form>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Nome:</b>\r\n                                                <br /> {{funcionario.nome}}\r\n                                            </p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Cargo:</b>\r\n                                                <br /> {{ funcionario.cargo ? funcionario.cargo.nome : \"-\"}}</p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Projeto:</b>\r\n                                                <br /> {{(funcionario.projeto) ? funcionario.projeto : \"-\"}}\r\n                                            </p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Local:</b>\r\n                                                <br /> {{(funcionario.cidade && funcionario.endereco.uf) ? funcionario.cidade +\r\n                                                \" / \" + funcionario.endereco.uf : \"-\"}}\r\n                                            </p>\r\n                                        </td>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>E-mail Principal:</b>\r\n                                                <br /> {{(funcionario.email) ? funcionario.email : \"-\"}}</p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Status:</b>\r\n                                                <br /> {{(funcionario.situacao) ? funcionario.situacao : \"-\"}}</p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Data de AdmissÃ£o:</b>\r\n                                                <br /> {{(funcionario.dataAdmissao) ? funcionario.dataAdmissao : \"-\"}}</p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Data de DemissÃ£o:</b>\r\n                                                <br /> {{(funcionario.dataDemissao) ? funcionario.dataDemissao : \"-\"}}</p>\r\n                                        </td>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Carga HorÃ¡ria DiÃ¡ria:</b>\r\n                                                <br /> {{(funcionario.jornadaDiariaFormatada) ? funcionario.jornadaDiariaFormatada + ' horas' : \"-\"}}\r\n                                            </p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Carga HorÃ¡ria Mensal:</b>\r\n                                                <br /> {{(funcionario.horasMes) ? funcionario.horasMes + ' horas' : \"-\"}}\r\n                                            </p>\r\n                                        </td>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <td>\r\n                                            <p>\r\n                                                <b>Banco de Horas:</b>\r\n                                                <br /> {{ (funcionario.totalBancoHorasFormatado) ? funcionario.totalBancoHorasFormatado\r\n                                                : \"-\"}}</p>\r\n                                        </td>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n                    </mat-expansion-panel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/funcionario/funcionario.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #004D7E; }\n\n.mat-spinner {\n  float: right !important;\n  width: 10px;\n  height: 10px;\n  margin: 5px 5px 0px 0px; }\n"

/***/ }),

/***/ "./src/app/components/funcionario/funcionario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncionarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_funcionario_service__ = __webpack_require__("./src/app/service/funcionario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuncionarioComponent = (function () {
    function FuncionarioComponent(user, funcionarioService, emitirEventoService, _avRoute) {
        this.user = user;
        this.funcionarioService = funcionarioService;
        this.emitirEventoService = emitirEventoService;
        this._avRoute = _avRoute;
        this.funcionario = {};
        this.userGestor = true;
        this.loading = false;
        this.exibirdados = false;
    }
    FuncionarioComponent.prototype.ngOnInit = function () {
        this.userGestor = this.hasPermission('srf_userAdm');
        if (!this.userGestor) {
            this.obterDadosFuncionario(this.user.matricula());
        }
        this.matricula = this._avRoute.snapshot.queryParamMap.get("matricula");
        this.nomefuncionario = this._avRoute.snapshot.queryParamMap.get("nome");
        if (this.matricula && this.nomefuncionario) {
            this.funcionario.codigoDominio = this.matricula;
            this.funcionario.nome = this.nomefuncionario;
            this.obterDadosFuncionario(this.matricula);
        }
    };
    FuncionarioComponent.prototype.hasPermission = function (permission) {
        return this.user.hasPermission(permission);
    };
    /**
     * Ao informar a matrÃ­cula, o sistema busca da api os dados do funcionÃ¡rio
     * @param event
     */
    FuncionarioComponent.prototype.buscar = function (event) {
        if (event.target.value) {
            if (event.target.value) {
                this.obterDadosFuncionario(event.target.value);
            }
        }
    };
    FuncionarioComponent.prototype.obterDadosFuncionario = function (matricula) {
        var _this = this;
        this.loading = true;
        this.funcionarioService.getBy(matricula, "matricula").subscribe(function (map) {
            if (map) {
                _this.funcionario = map;
                _this.funcionario.codigoDominio = map.matricula;
                _this.emitirEventoService.emitir("funcionario", _this.funcionario);
                _this.loading = false;
                _this.exibirdados = true;
            }
        }, function (erros) {
            _this.funcionario = {};
            var msg = "Nenhum funcionÃ¡rio encontrado";
            if (erros.error.message) {
                msg = erros.error.message;
            }
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(msg, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
            _this.loading = false;
            _this.exibirdados = false;
        });
    };
    FuncionarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-funcionario',
            template: __webpack_require__("./src/app/components/funcionario/funcionario.component.html"),
            styles: [__webpack_require__("./src/app/components/funcionario/funcionario.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_user_data_service__["a" /* UserDataService */], __WEBPACK_IMPORTED_MODULE_1__service_funcionario_service__["a" /* FuncionarioService */],
            __WEBPACK_IMPORTED_MODULE_4__service_emitir_evento_service__["a" /* EmitirEventoService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], FuncionarioComponent);
    return FuncionarioComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-wrapper pull-left\">\r\n            <a target=\"_blank\" class=\"navbar-brand\"\r\n                href=\"http://www.flem.org.br/sistema-eletronico-para-registro-de-frequencia-sera-implantado-na-flem/\">\r\n                Ajuda\r\n                <i class=\"material-icons\">help</i>\r\n            </a>\r\n        </div>\r\n        <div class=\"navbar-wrapper pull-right\" *ngIf=\"nomeUsuario\" >\r\n            <i class=\"material-icons\" >person</i>{{nomeUsuario}}\r\n        </div>\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ROUTES } from '../sidebar/sidebar.component';



var NavbarComponent = (function () {
    function NavbarComponent(location, element, router, _user) {
        this.element = element;
        this.router = router;
        this._user = _user;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
        this.obterNomeUsuario();
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    // getTitle(){
    //   var titlee = this.location.prepareExternalUrl(this.location.path());
    //   if(titlee.charAt(0) === '#'){
    //       titlee = titlee.slice( 2 );
    //   }
    //   titlee = titlee.split('/')[1];
    //   for(var item = 0; item < this.listTitles.length; item++){
    //     if(this.listTitles[item].path.includes(titlee)){
    //         return this.listTitles[item].title;
    //     }
    //   }
    //   return 'Dashboard';
    // }
    NavbarComponent.prototype.obterNomeUsuario = function () {
        this.nomeUsuario = this._user.nameUser();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_3_app_service_user_data_service__["a" /* UserDataService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/projetos/projetos/projetos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n      <label for=\"filter\">Projetos:</label>\r\n    <mat-form-field class=\"filter-full-width\">\r\n      <input type=\"text\" placeholder=\"Buscar\" aria-label=\"Number\" matInput [formControl]=\"myControl\">\r\n    </mat-form-field>\r\n    <input type=\"checkbox\" value=\"0\" name=\"tudo\" (change)=\"marcarDesmarcar()\" [checked]=checked [hidden]=\"isHabilitarTodos\"/>\r\n    <b [hidden]=\"isHabilitarTodos\">Todos os Projetos</b>\r\n    <div class=\"flex layout-padding\" style=\"overflow-y: scroll; max-height:200px; padding-left: 25px\">\r\n      <mat-option *ngFor=\"let item of filteredProjects | async\" [value]=\"item.nome\">\r\n        <input type=\"checkbox\" value=\"{{item.codigoDominio}}\" name=\"tudo\" (change)=\"onCheckboxChange(item,$event)\" [checked]=\"checked\"\r\n        /> {{item.nome}}\r\n      </mat-option>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/projetos/projetos/projetos.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/projetos/projetos/projetos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_dashboard_service__ = __webpack_require__("./src/app/service/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjetosComponent = (function () {
    function ProjetosComponent(service, emitirEventoService) {
        this.service = service;
        this.emitirEventoService = emitirEventoService;
        this.checkedList = [];
        this.checked = false;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]();
        this.checkedListRetorno = [];
        this.isHabilitarTodos = true;
        this.isChecked = false;
    }
    ProjetosComponent.prototype.ngOnInit = function () {
        this.isHabilitarTodos = false;
        this.carregarProjetos();
        this.emiterProjetosTodos();
    };
    ProjetosComponent.prototype.carregarProjetos = function () {
        var _this = this;
        this.service.projetos().subscribe(function (projetos) {
            _this.projetos = projetos;
            _this.filteredProjects = _this.myControl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["b" /* map */])(function (value) { return _this._filter(value); }));
        });
    };
    ProjetosComponent.prototype.marcarDesmarcar = function () {
        if (this.checked)
            this.limparTodos();
        else
            this.marcarTodos();
    };
    ProjetosComponent.prototype.limparTodos = function () {
        this.checked = false;
        this.checkedList = [];
    };
    ;
    ProjetosComponent.prototype.marcarTodos = function () {
        this.checked = true;
        this.checkedList = [];
        for (var i = 0; i < this.projetos.length; i++) {
            this.checkedList.push(this.projetos[i]);
        }
        this.emiterProjetos(this.checkedList);
    };
    ;
    ProjetosComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.projetos.filter(function (option) { return option.nome.toLowerCase().includes(filterValue); });
    };
    ProjetosComponent.prototype.onCheckboxChange = function (option, event) {
        // console.log(this.checkedList);
        if (event.target.checked) {
            this.checkedList.push(option);
        }
        else {
            for (var i = 0; i < this.projetos.length; i++) {
                if (this.checkedList[i] == option) {
                    this.checkedList.splice(i, 1);
                }
            }
        }
        this.emiterProjetos(this.checkedList);
    };
    ProjetosComponent.prototype.emiterProjetos = function (checkedList) {
        this.emitirEventoService.emitir("projetos", checkedList);
    };
    ProjetosComponent.prototype.emiterProjetosTodos = function () {
        var _this = this;
        this.emitirEventoService.mensagem.subscribe(function (obj) {
            if (obj.type == 'habilitar-hidden') {
                _this.isHabilitarTodos = obj.data;
                if (_this.isHabilitarTodos) {
                    _this.limparTodos();
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjetosComponent.prototype, "isChecked", void 0);
    ProjetosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projetos',
            template: __webpack_require__("./src/app/components/projetos/projetos/projetos.component.html"),
            styles: [__webpack_require__("./src/app/components/projetos/projetos/projetos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_service_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_3__service_emitir_evento_service__["a" /* EmitirEventoService */]])
    ], ProjetosComponent);
    return ProjetosComponent;
}());



/***/ }),

/***/ "./src/app/components/projetos/projetos/projetos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjetosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProjetosModule = (function () {
    function ProjetosModule() {
    }
    ProjetosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatOptionModule */]
            ],
            declarations: [],
            providers: [],
            exports: []
        })
    ], ProjetosModule);
    return ProjetosModule;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <div class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/favicon.png\"/>\r\n        </div>\r\n        <span style=\"color: red\">FrequÃªncia</span>\r\n    </div>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <!-- <div *ngIf=\"isMobileMenu()\"> -->\r\n    <!-- <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </form> -->\r\n    <!-- <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n         <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#pablo\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                </p>\r\n            </a>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                </p>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n            </div>\r\n        </li> -->\r\n        <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#pablo\">\r\n                <i class=\"material-icons\">person</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Account</span>\r\n                </p>\r\n            </a>\r\n        </li> -->\r\n    <!-- </ul>  -->\r\n  <!-- </div> -->\r\n  <!--mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n            FuncionÃ¡rios\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n\r\n        </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <ul class=\"nav\">\r\n                <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\" *ngIf=\"menuItem.visible\">\r\n                        <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                        <p>{{menuItem.title}}</p>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n    </mat-expansion-panel -->\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\" *ngIf=\"menuItem.visible\">\r\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                <p>{{menuItem.title}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(userData) {
        this.userData = userData;
        this.menuItems = [
            { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '', visible: this.userData.hasPermission("acessoDashboard") },
            { path: '/registrar-ponto', title: 'Registrar FrequÃªncia', icon: 'timer', class: '', visible: this.userData.hasPermission('registrarFrequencia') },
            { path: '/administrar-ponto', title: 'Administrar FrequÃªncia', icon: 'description', class: '', visible: this.userData.hasPermission('acessoAdmFrequencia') },
            { path: '/feriados', title: 'Feriados', icon: 'calendar_today', class: '', visible: this.userData.hasPermission('acessoFeriado') },
            { path: '/registrar-ponto-atraso', title: 'FrequÃªncia Manual', icon: 'alarm_add', class: '', visible: this.userData.hasPermission('acessoPontoAtraso') },
            { path: '/justificativas', title: 'Justificativas', icon: 'feedback', class: '', visible: this.userData.hasPermission('acessoJustificativa') },
            { path: '/lancar-justificativa', title: 'Justificar AusÃªncia', icon: 'local_hospital', class: '', visible: this.userData.hasPermission('acessoLancarAtestado') },
            { path: '/banco-de-horas', title: 'Banco de Horas', icon: 'assignment', class: '', visible: this.userData.hasPermission('acessoBancoDeHoras') },
            { path: '/ajuste-banco-de-horas', title: 'Ajuste Banco de Horas', icon: 'iso', class: '', visible: this.userData.hasPermission('acessoAjuste') },
            { path: '/folhas-disponibilizada', title: 'FrequÃªncias Disponiblizadas', icon: 'alarm_on', class: '', visible: this.userData.hasPermission('acessoSaeb') },
            { path: '/relatorios', title: 'Relatorios', icon: 'insert_drive_file', class: '', visible: this.userData.hasPermission('acessoRelatorios') },
            { path: '/frequencia', title: 'Frequencias', icon: 'access_time', class: '', visible: this.userData.hasPermission('acessoTelaFrequencia') },
            { path: '/exportar-dominio', title: 'Exportar DomÃ­nio', icon: 'unarchive', class: '', visible: this.userData.hasPermission('acessoExportarDominio') },
            { path: '/ferias', title: 'FÃ©rias', icon: 'beach_access', class: '', visible: this.userData.hasPermission('acessoFeriasSRF') },
            { path: '/administrar-ferias', title: 'Administrar FÃ©rias', icon: 'beach_access', class: '', visible: this.userData.hasPermission('acessoAdmFerias') },
            { path: '/funcionarios', title: 'FuncionÃ¡rios', icon: 'people', class: '', visible: this.userData.hasPermission('acessoEdicaoFuncionario') },
            { path: '/contatos', title: 'Contatos', icon: 'mail_outline', class: '', visible: this.userData.hasPermission('contatoSRF') },
            { path: '/anexar-horario-trabalho', title: 'HorÃ¡rio de Trabalho', icon: 'business_center', class: '', visible: this.userData.hasPermission('acessoAnexarHoraTrabSRF') },
            { path: '/administrar-horario-trabalho', title: 'Adm HorÃ¡rio de Trabalho', icon: 'business_center', class: '', visible: this.userData.hasPermission('acessoAdmHoraTrabSRF') },
            { path: '/administrar-perfil', title: 'Adm Perfil', icon: 'face', class: '', visible: this.userData.hasPermission('acessoAdmPendenciaSRF') },
            { path: '/editar-perfil', title: 'Editar Perfil', icon: 'face', class: '', visible: this.userData.hasPermission('acessoPendenciaSRF') },
            { path: '/importacao-arquivos', title: 'Importar PDF', icon: 'publish', class: '', visible: this.userData.hasPermission('acessoImportarArquivosSRF') },
            { path: '/login', title: this.label(), icon: 'exit_to_app', class: '', visible: true }
        ];
    }
    SidebarComponent.prototype.label = function () {
        if (this.userData.isLogged()) {
            return "Sair";
        }
        else {
            return "Gerenciar";
        }
    };
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_data_service__["a" /* UserDataService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" align=\"center\">\r\n    <div class=\"container-fluid col-lg-6 col-md-12\">\r\n        <div class=\"card-body\">\r\n\r\n            <div class=\"logo\">\r\n                <div class=\"simple-text\">\r\n                    <div class=\"logo-img\">\r\n                        <img src=\"/assets/img/favicon.png\" />\r\n                    </div>\r\n                    <span style=\"color: red\">FrequÃªncia</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"separator\"></div>\r\n            <div class=\"row col-lg-6 col-md-12\">\r\n                <label for=\"filter\">{{ msgReturn }}</label>\r\n            </div>\r\n            <a [hidden]=\"isErro\" class=\"nav-link\" [routerLink]=\"['/registrar-ponto']\">\r\n                <p>Registrar FrequÃªncia</p>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_confirm_email_service__ = __webpack_require__("./src/app/service/confirm-email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmEmailComponent = (function () {
    function ConfirmEmailComponent(confirmService, activatedRoute) {
        var _this = this;
        this.confirmService = confirmService;
        this.activatedRoute = activatedRoute;
        this.isErro = true;
        this.activatedRoute.params.subscribe(function (params) {
            var token = params.id;
            _this.confirmarEmail(token);
        });
    }
    ConfirmEmailComponent.prototype.ngOnInit = function () {
    };
    ConfirmEmailComponent.prototype.confirmarEmail = function (token) {
        var _this = this;
        this.confirmService.confirmarEmail(token).subscribe(function (map) {
            _this.msgReturn = "Confirmado com sucesso";
            _this.isErro = false;
        }, function (erro) {
            _this.isErro = true;
            _this.msgReturn = "Erro ao confirmar e-mail";
        });
    };
    ConfirmEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-email',
            template: __webpack_require__("./src/app/confirm-email/confirm-email.component.html"),
            styles: [__webpack_require__("./src/app/confirm-email/confirm-email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_confirm_email_service__["a" /* ConfirmEmailService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ConfirmEmailComponent);
    return ConfirmEmailComponent;
}());



/***/ }),

/***/ "./src/app/confirm-email/confirm-email.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_email_component__ = __webpack_require__("./src/app/confirm-email/confirm-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_confirm_email_service__ = __webpack_require__("./src/app/service/confirm-email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConfirmEmailModule = (function () {
    function ConfirmEmailModule() {
    }
    ConfirmEmailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["e" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__confirm_email_component__["a" /* ConfirmEmailComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__confirm_email_component__["a" /* ConfirmEmailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__service_confirm_email_service__["a" /* ConfirmEmailService */]
            ]
        })
    ], ConfirmEmailModule);
    return ConfirmEmailModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n            <div class=\"card-title font-weight h4\" align=\"center\">\r\n              <table>\r\n                <tr>\r\n                  <td><b>Abono</b></td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body text-align-justify\">\r\n            <div mat-dialog-content style=\"font-size: 17px;\">\r\n              <table class=\"table table-hover\">\r\n                <thead>\r\n                  <th><b>Entrada:</b>{{data.obj.horaInicio}}</th>\r\n                  <th><b>Saida:</b>{{data.obj.horaFim}}</th>\r\n                </thead>\r\n              </table>\r\n              <div>\r\n                <div>ObservaÃ§Ã£o:</div>\r\n                <textarea class=\"mdc-text-field__input\" maxlength=\"200\" rows=\"5\" style=\"min-width: 100%\"\r\n                  [(ngModel)]=\"data.obj.observacao\"></textarea>\r\n                <span style=\"color:red;font-size:80%\">Campo ObrigatÃ³rio</span>\r\n              </div>\r\n            <div [hidden]=\"data.obj.tipoJutificativa!='FALTA_MEDICA'\">\r\n                <label>Anexar Novamente?</label>\r\n              <mat-radio-group [(ngModel)]=\"anexarNovamente\">              \r\n                <mat-radio-button value=\"1\">Sim</mat-radio-button>\r\n                <mat-radio-button value=\"2\">NÃ£o</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n            <div>\r\n              <mat-radio-group [(ngModel)]=\"manifestacao\" *ngIf=\"data.obj.tipoJutificativa=='OUTRAS_FALTAS'\">\r\n                <mat-radio-button value=\"1\">Abonar</mat-radio-button>\r\n                <mat-radio-button value=\"2\">NÃ£o Abonar</mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n          </div>\r\n          <div mat-dialog-actions>\r\n            <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"aprovar()\" *ngIf=\"data.rh\">\r\n              <i class=\"material-icons\">done</i>Aprovar</button>\r\n            <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"aprovarAtestadoMedicoOrOutrasFaltas()\"\r\n              *ngIf=\"!data.rh\">\r\n              <i class=\"material-icons\">done</i>Aprovar</button>\r\n            <button mat-raised-button class=\"btn btn-danger\" (click)=\"reprovar()\" *ngIf=\"data.rh\">\r\n              <i class=\"material-icons\">not_interested</i>Reprovar</button>\r\n            <button mat-raised-button class=\"btn btn-danger\" (click)=\"reprovarAtestadoMedicoOrOutrasFaltas()\"\r\n              *ngIf=\"!data.rh\">\r\n              <i class=\"material-icons\">not_interested</i>Reprovar</button>\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color: gray;\">\r\n              <i class=\"material-icons\">close</i>Fechar</button>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAprovarAbonoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_abono_service__ = __webpack_require__("./src/app/service/abono.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DialogAprovarAbonoComponent = (function () {
    function DialogAprovarAbonoComponent(dialogRef, data, abono, emitirEventoService, user) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.abono = abono;
        this.emitirEventoService = emitirEventoService;
        this.user = user;
    }
    DialogAprovarAbonoComponent.prototype.ngOnInit = function () {
        this.manifestacao = '1';
        this.anexarNovamente = '1';
    };
    DialogAprovarAbonoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAprovarAbonoComponent.prototype.aprovar = function () {
        this.approveOrDisapproveAdd(true);
    };
    DialogAprovarAbonoComponent.prototype.reprovar = function () {
        if (!this.data.obj.observacao) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor preencha o campo observaÃ§Ã£o", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        else {
            this.approveOrDisapproveAdd(false);
        }
    };
    DialogAprovarAbonoComponent.prototype.approveOrDisapproveAdd = function (validado) {
        var obj = {};
        if (validado) {
            obj.tipo = 'aprovadas';
            obj.pathLocal = 'aprovar';
        }
        else {
            obj.tipo = 'reprovadas';
            obj.pathLocal = 'reprovar';
        }
        this.enviar(obj);
    };
    // metodo que aprova e reprova os abonos
    DialogAprovarAbonoComponent.prototype.enviar = function (obj) {
        var _this = this;
        this.setData();
        if (this.data.obj && this.data.obj.id) {
            this.abono.approveOrDisapprove(obj.pathLocal, this.data.obj).subscribe(function (val) {
                __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('Horas abonadas ' + obj.tipo + ' com sucesso', __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Success);
                _this.onNoClick();
                // console.log(this.emitirEventoService);
                _this.emitirEventoService.emitir("abono", "abono");
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
            });
        }
    };
    DialogAprovarAbonoComponent.prototype.setData = function () {
        this.data.obj.usuarioValidador = this.user.matricula();
        this.data.obj.hrTrabalhadas = null;
        this.data.obj.status = null;
    };
    DialogAprovarAbonoComponent.prototype.aprovarAtestadoMedicoOrOutrasFaltas = function () {
        var _this = this;
        var obj = this.obj();
        this.abono.aprovarAtestadoMedicoOrOutrasFaltas(obj).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["d" /* take */])(1)).subscribe(function (val) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('Horas abonadas aprovadas com sucesso', __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Success);
            _this.onNoClick();
            _this.emitirEventoService.emitir("abono", "abono");
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogAprovarAbonoComponent.prototype.reprovarAtestadoMedicoOrOutrasFaltas = function () {
        var _this = this;
        if (!this.data.obj.observacao) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor preencha o campo observaÃ§Ã£o", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        var obj = this.obj();
        this.abono.reprovarAtestadoMedicoOrOutrasFaltas(obj).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["d" /* take */])(1)).subscribe(function (val) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('Horas abonadas aprovadas com sucesso', __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Success);
            _this.onNoClick();
            _this.emitirEventoService.emitir("abono", "abono");
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogAprovarAbonoComponent.prototype.obj = function () {
        var obj = this.data.obj;
        obj.idFrequencia = this.data.idFrequencia;
        obj.observacao = this.data.obj.observacao;
        obj.manifestacao = this.manifestacao == '1' ? true : false;
        obj.anexarNovamente = this.anexarNovamente == '1' ? true : false;
        return obj;
    };
    DialogAprovarAbonoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-aprovar-abono',
            template: __webpack_require__("./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__service_abono_service__["a" /* AbonoService */],
            __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_6__service_user_data_service__["a" /* UserDataService */]])
    ], DialogAprovarAbonoComponent);
    return DialogAprovarAbonoComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAprovarAbonoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_aprovar_abono_component__ = __webpack_require__("./src/app/dialog/dialog-aprovar-abono/dialog-aprovar-abono.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__administrar_ponto_administrar_ponto_administrar_ponto_component__ = __webpack_require__("./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DialogAprovarAbonoModule = (function () {
    function DialogAprovarAbonoModule() {
    }
    DialogAprovarAbonoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatRadioModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_aprovar_abono_component__["a" /* DialogAprovarAbonoComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_aprovar_abono_component__["a" /* DialogAprovarAbonoComponent */], __WEBPACK_IMPORTED_MODULE_3__administrar_ponto_administrar_ponto_administrar_ponto_component__["a" /* AdministrarPontoComponent */]]
        })
    ], DialogAprovarAbonoModule);
    return DialogAprovarAbonoModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"data.all\">\r\n  <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n    <div class=\"card-title font-weight h4\" align=\"center\">\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <b>Aprovar todas marcaÃ§Ãµes</b>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body text-align-justify\">\r\n    <div mat-dialog-content style=\"font-size: 17px;\">\r\n      <div>\r\n        <div>ObservaÃ§Ã£o:</div>\r\n        <textarea class=\"mdc-text-field__input\" maxlength=\"200\" rows=\"5\" style=\"min-width: 100%\" [(ngModel)]=\"data.observacao\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div [hidden]=\"!loading\" class=\"container-fluid col-lg-6 col-md-12\" align=\"center\">\r\n      <h5>Validando...</h5>\r\n      <mat-spinner [diameter]=\"80\"></mat-spinner>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"aprovarEmLote()\" [hidden]=\"loading\">\r\n        <i class=\"material-icons\">done</i>Aprovar</button>\r\n      <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color: gray;\">\r\n        <i class=\"material-icons\">close</i>Fechar</button>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\" *ngIf=\"!data.all\">\r\n  <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n    <div class=\"card-title font-weight h4\" align=\"center\">\r\n      <table>\r\n        <tr>\r\n          <td>\r\n            <b>Aprovar MarcaÃ§Ãµes</b>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body text-align-justify\">\r\n    <div mat-dialog-content style=\"font-size: 17px;\">\r\n      <table class=\"table table-hover\">\r\n        <thead>\r\n          <th>\r\n            <b>Entrada:</b>{{hrEntrada}}</th>\r\n          <th>\r\n            <b>Saida:</b>{{hrSaida}}</th>\r\n        </thead>\r\n      </table>\r\n      <div>\r\n        <div>ObservaÃ§Ã£o:</div>\r\n        <textarea class=\"mdc-text-field__input\" maxlength=\"200\" rows=\"5\" style=\"min-width: 100%\" [(ngModel)]=\"data.marcacoes.observacao\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"aprovar()\" >\r\n        <i class=\"material-icons\">done</i>Aprovar</button>\r\n      <button mat-raised-button class=\"btn btn-danger\" (click)=\"reprovar()\">\r\n        <i class=\"material-icons\">not_interested</i>Reprovar</button>\r\n      <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color: gray;\">\r\n        <i class=\"material-icons\">close</i>Fechar</button>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAprovarMarcacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_marcacoes_service__ = __webpack_require__("./src/app/service/marcacoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_marcacao__ = __webpack_require__("./src/app/model/marcacao.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_abono_service__ = __webpack_require__("./src/app/service/abono.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var DialogAprovarMarcacaoComponent = (function () {
    function DialogAprovarMarcacaoComponent(dialogRef, data, marcacoesService, emitirEventoService, user, abonoService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.marcacoesService = marcacoesService;
        this.emitirEventoService = emitirEventoService;
        this.user = user;
        this.abonoService = abonoService;
        this.obj = {};
        this.loading = false;
    }
    DialogAprovarMarcacaoComponent.prototype.ngOnInit = function () {
        if (this.data.marcacoes) {
            if (this.data.marcacoes.hrEntrada) {
                this.hrEntrada = this.data.marcacoes.hrEntrada.horaMarcacao;
            }
            if (this.data.marcacoes.hrSaida) {
                this.hrSaida = this.data.marcacoes.hrSaida.horaMarcacao;
            }
        }
    };
    DialogAprovarMarcacaoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAprovarMarcacaoComponent.prototype.aprovar = function () {
        this.approveOrDisapproveAdd(true);
    };
    DialogAprovarMarcacaoComponent.prototype.aprovarEmLote = function () {
        this.loading = true;
        var frequencias = this.data.frequencias;
        var observacao = this.data.observacao;
        var marcacaoEntrada = new __WEBPACK_IMPORTED_MODULE_6__model_marcacao__["a" /* Marcacao */]();
        var marcacaoSaida = new __WEBPACK_IMPORTED_MODULE_6__model_marcacao__["a" /* Marcacao */]();
        var listaMarcacoes = [];
        var listaAbonos = [];
        for (var i = 0; i < frequencias.length; i++) {
            if (frequencias[i].marcacoes) {
                for (var y = 0; y < frequencias[i].marcacoes.length; y++) {
                    marcacaoEntrada = this.preencherMarcacoes(frequencias[i].marcacoes[y].hrEntrada, frequencias[i].dataDia);
                    marcacaoSaida = this.preencherMarcacoes(frequencias[i].marcacoes[y].hrSaida, frequencias[i].dataDia);
                    listaMarcacoes.push(marcacaoEntrada);
                    listaMarcacoes.push(marcacaoSaida);
                }
            }
            if (frequencias[i].abonos && frequencias[i].abonos.length > 0) {
                for (var j = 0; j < frequencias[i].abonos.length; j++) {
                    frequencias[i].abonos[j].hrTrabalhadas = null;
                    frequencias[i].abonos[j].observacao = this.data.observacao;
                    listaAbonos.push(frequencias[i].abonos[j]);
                }
            }
        }
        this.obj.tipo = 'Aprovadas';
        this.obj.pathLocal = "validadas";
        this.validarMarcacoesEmLote(frequencias, listaMarcacoes, listaAbonos);
    };
    DialogAprovarMarcacaoComponent.prototype.reprovar = function () {
        if (!this.data.marcacoes.observacao) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor preencha o campo observaÃ§Ã£o!", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        else {
            this.approveOrDisapproveAdd(false);
        }
    };
    DialogAprovarMarcacaoComponent.prototype.preencherMarcacoes = function (obj, dataDia) {
        var marc = new __WEBPACK_IMPORTED_MODULE_6__model_marcacao__["a" /* Marcacao */]();
        if (obj && obj.id) {
            marc.id = obj.id;
            marc.dataMarcacao = dataDia + " " + obj.horaMarcacao;
            marc.observacao = this.data.observacao;
            marc.usuarioValidador = this.user.matricula();
            marc.usuarioAtualizacao = this.user.matricula();
        }
        return marc;
    };
    DialogAprovarMarcacaoComponent.prototype.approveOrDisapproveAdd = function (validado) {
        var hrEntrada = this.data.marcacoes.hrEntrada;
        var hrSaida = this.data.marcacoes.hrSaida;
        var marcacaoEntrada = new __WEBPACK_IMPORTED_MODULE_6__model_marcacao__["a" /* Marcacao */]();
        var marcacaoSaida = new __WEBPACK_IMPORTED_MODULE_6__model_marcacao__["a" /* Marcacao */]();
        var marcacoes = [];
        if (hrEntrada && hrEntrada.id) {
            marcacaoEntrada = this.preencherMarcacoes(hrEntrada, this.data.dataDia);
            marcacoes.push(marcacaoEntrada);
        }
        if (hrSaida && hrSaida.id) {
            marcacaoSaida = this.preencherMarcacoes(hrSaida, this.data.dataDia);
            marcacoes.push(marcacaoSaida);
        }
        //  console.log(marcacaoEntrada, marcacaoSaida);
        if (validado) {
            this.obj.tipo = 'aprovadas';
            this.obj.pathLocal = "validadas";
        }
        else {
            this.obj.tipo = 'reprovadas';
            this.obj.pathLocal = "reprovadas";
        }
        this.enviar(marcacoes);
    };
    DialogAprovarMarcacaoComponent.prototype.enviar = function (marcacoes) {
        var _this = this;
        this.marcacoesService.approveOrDisapprove(marcacoes, this.obj.pathLocal).subscribe(function (val) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('MarcaÃ§Ãµes ' + _this.obj.tipo + ' com Sucesso!', __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Success);
            _this.emitirEventoService.emitir("dialogAprovar", "dialogAprovar");
            _this.onNoClick();
        }, function (error) {
            var msg = error.error.message;
            if (!msg) {
                msg = "Ocorreu um erro inesperado!";
            }
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(msg, __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogAprovarMarcacaoComponent.prototype.enviarMarcacoesLote = function (marcacoes, abonos) {
        var _this = this;
        this.marcacoesService.approveOrDisapprove(marcacoes, this.obj.pathLocal).subscribe(function (val) {
            _this.enviarAbonosEmLote(abonos);
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Ocorreu um erro inesperado!", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogAprovarMarcacaoComponent.prototype.enviarAbonosEmLote = function (abonos) {
        var _this = this;
        this.abonoService.approveOrDisapproveList(abonos).subscribe(function (val) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('MarcaÃ§Ãµes Aprovadas com Sucesso!', __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Success);
            _this.emitirEventoService.emitir("dialogAprovar", "dialogAprovar");
            _this.onNoClick();
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Ocorreu um erro inesperado!", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogAprovarMarcacaoComponent.prototype.validarMarcacoesEmLote = function (frequencias, marcacoes, abonos) {
        var _this = this;
        var id;
        frequencias.forEach(function (element) {
            if (element.idFrequencia) {
                id = element.idFrequencia;
            }
        });
        this.marcacoesService.verificarInconsistencia(id).subscribe(function (val) {
            _this.enviarMarcacoesLote(marcacoes, abonos);
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogAprovarMarcacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-aprovar-marcacao',
            template: __webpack_require__("./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__service_marcacoes_service__["a" /* MarcacoesService */],
            __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_7__service_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_8__service_abono_service__["a" /* AbonoService */]])
    ], DialogAprovarMarcacaoComponent);
    return DialogAprovarMarcacaoComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAprovarMarcacaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_aprovar_marcacao_component__ = __webpack_require__("./src/app/dialog/dialog-aprovar-marcacao/dialog-aprovar-marcacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__administrar_ponto_administrar_ponto_administrar_ponto_component__ = __webpack_require__("./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DialogAprovarMarcacaoModule = (function () {
    function DialogAprovarMarcacaoModule() {
    }
    DialogAprovarMarcacaoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatProgressSpinnerModule */]
            ],
            providers: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_aprovar_marcacao_component__["a" /* DialogAprovarMarcacaoComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_aprovar_marcacao_component__["a" /* DialogAprovarMarcacaoComponent */], __WEBPACK_IMPORTED_MODULE_3__administrar_ponto_administrar_ponto_administrar_ponto_component__["a" /* AdministrarPontoComponent */]]
        })
    ], DialogAprovarMarcacaoModule);
    return DialogAprovarMarcacaoModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n          <div class=\"card-title font-weight h4\" align=\"center\">\r\n            <table>\r\n              <tr>\r\n                <td><b>{{ tipoTitulo }} FrequÃªncia</b></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body text-align-justify\">\r\n          <div mat-dialog-content style=\"font-size: 17px;\">\r\n            <div *ngIf=\"data.reprovar\">\r\n              <label for=\"situacaoFuncionario\">Tipo de ReprovaÃ§Ã£o</label>\r\n              <mat-select style=\"height: 50px; padding: 2px; padding-left: 10px;\" \r\n                placeholder=\"Selecione...\" name=\"tipo\" id=\"tipo\" [(ngModel)]=\"tipoReprovacao\" >\r\n                <mat-option *ngFor=\"let item of tiposReprovacao$ | async\" [value]=\"item.id\">\r\n                  {{item.descricao}}\r\n                </mat-option>\r\n              </mat-select>\r\n              <span style=\"color:red;font-size:80%\" *ngIf=\"!tipoReprovacao\">Campo ObrigatÃ³rio</span>\r\n            </div>\r\n            <div>\r\n              <label for=\"situacaoFuncionario\">ObservaÃ§Ã£o</label>\r\n              <div>{{ tipoMotivo }}</div>\r\n              <textarea class=\"mdc-text-field__input\" maxlength=\"250\" rows=\"5\" style=\"min-width: 100%\"  [(ngModel)]=\"data.obj.observacao\"   required></textarea>\r\n              <span style=\"color:red;font-size:80%\" *ngIf=\"!data.obj.observacao\">Campo ObrigatÃ³rio</span>\r\n            </div>\r\n          </div>\r\n          <div mat-dialog-actions>\r\n            <button mat-raised-button class=\"btn btn-danger pull-left\" (click)=\"reprovar()\" *ngIf=\"data.reprovar\">\r\n              <i class=\"material-icons\">delete_forever</i>Reprovar</button>\r\n              <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"reabrir()\" *ngIf=\"!data.reprovar\">\r\n                <i class=\"material-icons\">lock_open</i>Reabrir</button>\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color: gray;\">\r\n              <i class=\"material-icons\">close</i>Fechar</button>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirmFrequenciasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_service_reprovacoes_service__ = __webpack_require__("./src/app/service/reprovacoes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DialogConfirmFrequenciasComponent = (function () {
    function DialogConfirmFrequenciasComponent(_dialogRef, data, _frequeciaService, _emitirEventoService, _reprovacaoService) {
        this._dialogRef = _dialogRef;
        this.data = data;
        this._frequeciaService = _frequeciaService;
        this._emitirEventoService = _emitirEventoService;
        this._reprovacaoService = _reprovacaoService;
    }
    DialogConfirmFrequenciasComponent.prototype.ngOnInit = function () {
        this.tipoTitulo = this.titulo();
        this.comboTiposReprovacao();
    };
    DialogConfirmFrequenciasComponent.prototype.titulo = function () {
        if (this.data.reprovar) {
            return "Reprovar";
        }
        else {
            return "Reabrir";
        }
    };
    DialogConfirmFrequenciasComponent.prototype.onNoClick = function () {
        this._dialogRef.close();
    };
    DialogConfirmFrequenciasComponent.prototype.reprovar = function () {
        var mensagem = this.validarcampos();
        if (mensagem != "") {
            __WEBPACK_IMPORTED_MODULE_2_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3_app_model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        else {
            this.reprovarFrequencia();
        }
    };
    DialogConfirmFrequenciasComponent.prototype.reabrir = function () {
        var mensagem = this.validarcampos();
        if (mensagem != "") {
            __WEBPACK_IMPORTED_MODULE_2_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3_app_model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        else {
            this.reabrirFrequencia();
        }
    };
    DialogConfirmFrequenciasComponent.prototype.reprovarFrequencia = function () {
        var _this = this;
        this._frequeciaService.reprovarFrequencia(this.obj()).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["d" /* take */])(1)).subscribe(function (obj) {
            __WEBPACK_IMPORTED_MODULE_2_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("FrequÃªncia reprovada com sucesso.", __WEBPACK_IMPORTED_MODULE_3_app_model_alert_type__["a" /* AlertType */].Success);
            _this._emitirEventoService.emitir("reprovar", "reprovar");
            _this.onNoClick();
        }, function (erro) {
            var mensagem = erro.error.message;
            if (!mensagem) {
                mensagem = "Ocorreu um erro inesperado!";
            }
            __WEBPACK_IMPORTED_MODULE_2_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3_app_model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogConfirmFrequenciasComponent.prototype.reabrirFrequencia = function () {
        var _this = this;
        this._frequeciaService.reabrirFrequencia(this.obj()).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["d" /* take */])(1)).subscribe(function (obj) {
            __WEBPACK_IMPORTED_MODULE_2_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("FrequÃªncia reaberta com sucesso.", __WEBPACK_IMPORTED_MODULE_3_app_model_alert_type__["a" /* AlertType */].Success);
            _this._emitirEventoService.emitir("reabrir", "reabrir");
            _this.onNoClick();
        }, function (erro) {
            console.log(erro);
            var mensagem = erro.error.message;
            if (!mensagem) {
                mensagem = "Ocorreu um erro inesperado!";
            }
            __WEBPACK_IMPORTED_MODULE_2_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3_app_model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogConfirmFrequenciasComponent.prototype.validarcampos = function () {
        if (this.data.reprovar) {
            if (!this.tipoReprovacao) {
                return "Por favor preencha o campo tipo Tipo de ReprovaÃ§Ã£o";
            }
        }
        if (!this.data.obj.observacao) {
            return "Por favor preencha o campo observaÃ§Ã£o!";
        }
        return "";
    };
    DialogConfirmFrequenciasComponent.prototype.obj = function () {
        var obj = {
            idFrequencia: this.data.obj.id,
            observacao: this.data.obj.observacao,
            aprovado: false,
            filePath: this.data.obj.filePath,
            reprovacao: this.tipoReprovacao
        };
        return obj;
    };
    DialogConfirmFrequenciasComponent.prototype.comboTiposReprovacao = function () {
        this.tiposReprovacao$ = this._reprovacaoService.getListaReprovacoes();
    };
    DialogConfirmFrequenciasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-confirm-frequencias',
            template: __webpack_require__("./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_5_app_service_frequencia_service__["a" /* FrequenciaService */],
            __WEBPACK_IMPORTED_MODULE_6_app_service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_7_app_service_reprovacoes_service__["a" /* ReprovacoesService */]])
    ], DialogConfirmFrequenciasComponent);
    return DialogConfirmFrequenciasComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirmFrequenciasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_confirm_frequencias_component__ = __webpack_require__("./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_service_reprovacoes_service__ = __webpack_require__("./src/app/service/reprovacoes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DialogConfirmFrequenciasModule = (function () {
    function DialogConfirmFrequenciasModule() {
    }
    DialogConfirmFrequenciasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSelectModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dialog_confirm_frequencias_component__["a" /* DialogConfirmFrequenciasComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__dialog_confirm_frequencias_component__["a" /* DialogConfirmFrequenciasComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_app_service_reprovacoes_service__["a" /* ReprovacoesService */]
            ]
        })
    ], DialogConfirmFrequenciasModule);
    return DialogConfirmFrequenciasModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-confirm/dialog-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n          <div class=\"card-title font-weight h4\" align=\"center\">\r\n            <table>\r\n              <tr>\r\n                <td><b>Remover marcaÃ§Ã£o</b></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body text-align-justify\">\r\n          <div mat-dialog-content style=\"font-size: 17px;\">\r\n            <div>\r\n              <div>Informe o motivo da exclusÃ£o da marcaÃ§Ã£o:</div>\r\n              <textarea class=\"mdc-text-field__input\" maxlength=\"250\" rows=\"5\" style=\"min-width: 100%\" [(ngModel)]=\"data.observacao\" required></textarea>\r\n            </div>\r\n          </div>\r\n          <div mat-dialog-actions>\r\n            <button mat-raised-button class=\"btn btn-danger pull-left\" (click)=\"remover()\">\r\n              <i class=\"material-icons\">delete_forever</i>Remover</button>\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color: gray;\">\r\n              <i class=\"material-icons\">close</i>Fechar</button>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-confirm/dialog-confirm.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-confirm/dialog-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_marcacoes_service__ = __webpack_require__("./src/app/service/marcacoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DialogConfirmComponent = (function () {
    function DialogConfirmComponent(dialogRef, data, marcacoesService, emitirEventoService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.marcacoesService = marcacoesService;
        this.emitirEventoService = emitirEventoService;
    }
    DialogConfirmComponent.prototype.ngOnInit = function () {
    };
    /**
     * ConfirmaÃ§Ã£o da exclusÃ£o da marcaÃ§Ã£o.
     */
    DialogConfirmComponent.prototype.removerMarcacoes = function () {
        var _this = this;
        if (!this.data.observacao) {
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor informe o motivo da exclusÃ£o da marcaÃ§Ã£o", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        if (this.data.id) {
            this.marcacoesService.removerMarcacao(this.data.id, this.data.observacao).subscribe(function (val) {
                __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('Removido com Sucesso', __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Success);
                _this.onNoClick();
                _this.emitirEventoService.emitir("remover", "remover");
            }, function (error) {
                __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
            });
        }
    };
    DialogConfirmComponent.prototype.remover = function () {
        if (this.data.marcacao) {
            this.removerMarcacoes();
        }
    };
    DialogConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-confirm',
            template: __webpack_require__("./src/app/dialog/dialog-confirm/dialog-confirm.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-confirm/dialog-confirm.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_4__service_marcacoes_service__["a" /* MarcacoesService */],
            __WEBPACK_IMPORTED_MODULE_5__service_emitir_evento_service__["a" /* EmitirEventoService */]])
    ], DialogConfirmComponent);
    return DialogConfirmComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-confirm/dialog-confirm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__administrar_ponto_administrar_ponto_administrar_ponto_component__ = __webpack_require__("./src/app/administrar-ponto/administrar-ponto/administrar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_confirm_component__ = __webpack_require__("./src/app/dialog/dialog-confirm/dialog-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogConfirmModule = (function () {
    function DialogConfirmModule() {
    }
    DialogConfirmModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dialog_confirm_component__["a" /* DialogConfirmComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__dialog_confirm_component__["a" /* DialogConfirmComponent */], __WEBPACK_IMPORTED_MODULE_2__administrar_ponto_administrar_ponto_administrar_ponto_component__["a" /* AdministrarPontoComponent */]]
        })
    ], DialogConfirmModule);
    return DialogConfirmModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" align=\"center\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-blueflem\">\r\n                    <div class=\"card-title font-weight h4\">\r\n                        <table>\r\n                            <tr>\r\n                                <td><b>ConfirmaÃ§Ã£o de E-mail!</b></td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body text-align-justify\">\r\n                    <div style=\"width: 100%; border-spacing: 10px; font-weight: bold; text-align: justify\">\r\n                        {{mensagemConfirmacao}}\r\n                    </div>\r\n                    <div style=\"width: 100%; text-align: right\">\r\n                        <button mat-raised-button (click)=\"onNoClick()\" class=\"btn\" style=\"background-color: gray;\">\r\n                            <i class=\"material-icons\">\r\n                                done_outline\r\n                            </i> <b>Estou Ciente</b></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirmarEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogConfirmarEmailComponent = (function () {
    function DialogConfirmarEmailComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.mensagemConfirmacao = "";
        this.mensagemConfirmacao = data.mensagem;
    }
    DialogConfirmarEmailComponent.prototype.ngOnInit = function () {
    };
    DialogConfirmarEmailComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogConfirmarEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-confirmar-email',
            template: __webpack_require__("./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], DialogConfirmarEmailComponent);
    return DialogConfirmarEmailComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogConfirmarEmailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_confirmar_email_component__ = __webpack_require__("./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DialogConfirmarEmailModule = (function () {
    function DialogConfirmarEmailModule() {
    }
    DialogConfirmarEmailModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dialog_confirmar_email_component__["a" /* DialogConfirmarEmailComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_confirmar_email_component__["a" /* DialogConfirmarEmailComponent */]]
        })
    ], DialogConfirmarEmailModule);
    return DialogConfirmarEmailModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"main-content\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n              <div class=\"card-title font-weight h4\" align=\"center\">\r\n                <table>\r\n                  <tr>\r\n                    <td><b>Anexar FrequÃªncia</b></td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body text-align-justify\">\r\n                <div mat-dialog-content>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-5\">                              \r\n                            <label>\r\n                              <input type=\"file\" class=\"form-control\" (change)=\"upload($event)\" #fileInput>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n                <div mat-dialog-actions>\r\n                    <button mat-button class=\"btn btn-success pull-left\" (click)=\"confirmar()\">\r\n                        <i class=\"material-icons\">done</i>Enviar</button>\r\n                  <button mat-button class=\"btn pull-right\" style=\"background-color:grey;\" (click)=\"onNoClick()\">\r\n                    <i class=\"material-icons\">close</i>Fechar</button>\r\n                  <div class=\"clearfix\"></div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogFolhaPontoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DialogFolhaPontoComponent = (function () {
    function DialogFolhaPontoComponent(dialogRef, data, fileService, user, emitirEventoService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fileService = fileService;
        this.user = user;
        this.emitirEventoService = emitirEventoService;
    }
    DialogFolhaPontoComponent.prototype.ngOnInit = function () {
    };
    DialogFolhaPontoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /**
   * Preenche o objeto this.currentFileUpload com o arquivo carregado
   * @param event
  */
    DialogFolhaPontoComponent.prototype.upload = function (event) {
        this.selectedFiles = event.target.files;
        this.currentFileUpload = event.target.files.item(0);
    };
    // enviar frequencia anexa
    DialogFolhaPontoComponent.prototype.confirmar = function () {
        var _this = this;
        if (this.currentFileUpload) {
            if (!__WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].extPermitidas(this.currentFileUpload.name)) {
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(__WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].msgExtInvalidas(), __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
                return false;
            }
            if (this.currentFileUpload.size > __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].getMaxSizeFile()) {
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(__WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].msgTamanhoInvalido(), __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
                return false;
            }
            if (!__WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].validarNomeArquivo(this.currentFileUpload.name)) {
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(__WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].msgNomeInvalido(), __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
                return false;
            }
            this.fileService.uploadFrequenciaAssinada(this.currentFileUpload, this.data.id).subscribe(function (folha) {
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("FrequÃªncia anexada com sucesso!", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Success);
                _this.emitirEventoService.emitir("mensagem", "anexada");
                _this.onNoClick();
            }, function (error) {
                var msg = error.error.message;
                if (!msg) {
                    msg = "Ocorreu um erro inesperado!";
                }
                __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(msg, __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor seleciona um arquivo", __WEBPACK_IMPORTED_MODULE_4__model_alert_type__["a" /* AlertType */].Error);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DialogFolhaPontoComponent.prototype, "fileInput", void 0);
    DialogFolhaPontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-folha-ponto',
            template: __webpack_require__("./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__service_file_service__["a" /* FileService */], __WEBPACK_IMPORTED_MODULE_5__service_user_data_service__["a" /* UserDataService */], __WEBPACK_IMPORTED_MODULE_6__service_emitir_evento_service__["a" /* EmitirEventoService */]])
    ], DialogFolhaPontoComponent);
    return DialogFolhaPontoComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogFolhaPontoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_folha_ponto_component__ = __webpack_require__("./src/app/dialog/dialog-folha-ponto/dialog-folha-ponto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DialogFolhaPontoModule = (function () {
    function DialogFolhaPontoModule() {
    }
    DialogFolhaPontoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            ],
            providers: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dialog_folha_ponto_component__["a" /* DialogFolhaPontoComponent */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__dialog_folha_ponto_component__["a" /* DialogFolhaPontoComponent */]]
        })
    ], DialogFolhaPontoModule);
    return DialogFolhaPontoModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n          <div class=\"card-title font-weight h4\" align=\"center\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <b>HistÃ³rico do dia {{ data.dataDia }}</b>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body text-align-justify\"  [hidden]=\"dados.data.length == 0\">\r\n          <div mat-dialog-content>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                HistÃ³rico das MarcaÃ§Ãµes\r\n              </mat-expansion-panel-header>\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\r\n              </mat-form-field>\r\n              <mat-table #table [dataSource]=\"dados\" #sortMarcacao=\"matSort\" matSort>\r\n                <ng-container matColumnDef=\"{{ column.id }}\" *ngFor=\"let column of columnNames\">\r\n                  <mat-header-cell *matHeaderCellDef> {{column.value}} </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element[column.id]}} </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n              </mat-table>\r\n              <mat-paginator [length]=\"dados.data.length\" #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n            </mat-expansion-panel>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body text-align-justify\"  [hidden]=\"dadosAbono.data.length == 0\">\r\n          <div mat-dialog-content>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                HistÃ³rico dos Abonos\r\n              </mat-expansion-panel-header>\r\n              <div mat-dialog-content>\r\n                <mat-form-field>\r\n                  <input matInput (keyup)=\"applyFilterAbono($event.target.value)\" placeholder=\"Filtrar\">\r\n                </mat-form-field>\r\n                <mat-table #table [dataSource]=\"dadosAbono\" #sortAbono=\"matSort\" matSort>\r\n                  <ng-container matColumnDef=\"{{ column.id }}\" *ngFor=\"let column of anoboColumnNames\">\r\n                    <mat-header-cell *matHeaderCellDef> {{column.value}} </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let element\"> {{element[column.id]}} </mat-cell>\r\n                  </ng-container>\r\n                  <mat-header-row *matHeaderRowDef=\"abonoDisplayedColumns\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: abonoDisplayedColumns;\"></mat-row>\r\n                </mat-table>\r\n                <mat-paginator [length]=\"dadosAbono.data.length\" #paginatorAbono [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n              </div>\r\n            </mat-expansion-panel>\r\n          </div>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color:grey;\"><i class=\"material-icons\">close</i>Fechar</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogHistoricoAdministrarPontoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogHistoricoAdministrarPontoComponent = (function () {
    // dataSource = new MatTableDataSource<any[]>();
    function DialogHistoricoAdministrarPontoComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // history$;
        this.displayedColumns = [];
        this.abonoDisplayedColumns = [];
        this.dados = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */]();
        this.dadosAbono = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */]();
    }
    DialogHistoricoAdministrarPontoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columns();
        this.abonoColumns();
        this.dataMarcacao = this.data.dataMarcacao;
        this.data.history.subscribe(function (map) {
            _this.dados = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */](map);
            _this.dados.sort = _this.sortMarcacao;
            _this.dados.paginator = _this.paginator;
            // console.log(this.dados.data);
        });
        this.data.historyAbono.subscribe(function (map) {
            _this.dadosAbono = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */](map);
            _this.dadosAbono.sort = _this.sortAbono;
            _this.dadosAbono.paginator = _this.paginatorAbono;
            // console.log(this.dadosAbono.data);
        });
    };
    DialogHistoricoAdministrarPontoComponent.prototype.columns = function () {
        this.columnNames = [
            { id: 'idMarcacao', value: 'Id' },
            { id: 'dtAtualizacao', value: 'Data AtualizaÃ§Ã£o' },
            { id: 'descStatus', value: 'Status' },
            { id: 'horaMarcacao', value: 'Hora MarcaÃ§Ã£o' },
            { id: 'nomeUsuarioAlteracao', value: 'UsuÃ¡rio' },
            { id: 'observacao', value: 'ObservaÃ§Ã£o' }
        ];
        this.displayedColumns = this.columnNames.map(function (x) { return x.id; });
    };
    DialogHistoricoAdministrarPontoComponent.prototype.abonoColumns = function () {
        this.anoboColumnNames = [
            { id: 'id', value: 'Id' },
            { id: 'dataAtualizacao', value: 'Data AtualizaÃ§Ã£o' },
            { id: 'descStatus', value: 'Status' },
            { id: 'horaInicio', value: 'Hora inicio' },
            { id: 'horaFim', value: 'Hora Fim' },
            { id: 'nomeUsuarioAlteracao', value: 'UsuÃ¡rio' },
            { id: 'observacao', value: 'DescriÃ§Ã£o Justificativa' }
        ];
        this.abonoDisplayedColumns = this.anoboColumnNames.map(function (x) { return x.id; });
    };
    DialogHistoricoAdministrarPontoComponent.prototype.applyFilter = function (filterValue) {
        this.dados.filter = filterValue.trim().toLowerCase();
    };
    DialogHistoricoAdministrarPontoComponent.prototype.applyFilterAbono = function (filterValue) {
        this.dadosAbono.filter = filterValue.trim().toLowerCase();
    };
    DialogHistoricoAdministrarPontoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginator */])
    ], DialogHistoricoAdministrarPontoComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginatorAbono'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginator */])
    ], DialogHistoricoAdministrarPontoComponent.prototype, "paginatorAbono", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sortMarcacao'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], DialogHistoricoAdministrarPontoComponent.prototype, "sortMarcacao", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sortAbono'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], DialogHistoricoAdministrarPontoComponent.prototype, "sortAbono", void 0);
    DialogHistoricoAdministrarPontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-historico-administrar-ponto',
            template: __webpack_require__("./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], DialogHistoricoAdministrarPontoComponent);
    return DialogHistoricoAdministrarPontoComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogHistoricoAdministrarPontoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_historico_administrar_ponto_component__ = __webpack_require__("./src/app/dialog/dialog-historico-administrar-ponto/dialog-historico-administrar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_dialog_historico_administrar_ponto_service__ = __webpack_require__("./src/app/service/dialog-historico-administrar-ponto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogHistoricoAdministrarPontoModule = (function () {
    function DialogHistoricoAdministrarPontoModule() {
    }
    DialogHistoricoAdministrarPontoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatExpansionModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__service_dialog_historico_administrar_ponto_service__["a" /* DialogHistoricoAdministrarPontoService */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dialog_historico_administrar_ponto_component__["a" /* DialogHistoricoAdministrarPontoComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_historico_administrar_ponto_component__["a" /* DialogHistoricoAdministrarPontoComponent */]]
        })
    ], DialogHistoricoAdministrarPontoModule);
    return DialogHistoricoAdministrarPontoModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n          <div class=\"card-title font-weight h4\" align=\"center\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <b>HistÃ³rico FrequÃªncia {{ data.competencia }}</b>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body text-align-justify\"  [hidden]=\"dados.data.length == 0\">\r\n          <div mat-dialog-content>\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\r\n              </mat-form-field>\r\n              <mat-table #table [dataSource]=\"dados\" #sort=\"matSort\" matSort>\r\n                <ng-container matColumnDef=\"{{ column.id }}\" *ngFor=\"let column of columnNames\">\r\n                  <mat-header-cell *matHeaderCellDef> {{column.value}} </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element[column.id]}} </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n              </mat-table>\r\n              <mat-paginator [length]=\"dados.data.length\" #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n          </div>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color:grey;\"><i class=\"material-icons\">close</i>Fechar</button>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogHistoricoFrequenciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogHistoricoFrequenciaComponent = (function () {
    function DialogHistoricoFrequenciaComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = [];
        this.dados = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */]();
    }
    DialogHistoricoFrequenciaComponent.prototype.ngOnInit = function () {
        this.columns();
        this.getHistory();
    };
    DialogHistoricoFrequenciaComponent.prototype.columns = function () {
        this.columnNames = [
            { id: 'usuarioValidador', value: 'UsuÃ¡rio validador' },
            { id: 'dataHoraValidacao', value: 'Data de validaÃ§Ã£o' },
            { id: 'dataAtualizacao', value: 'Data de atualizaÃ§Ã£o' },
            { id: 'descStatus', value: 'Status' },
            { id: 'temAnexo', value: 'ContÃ©m anexo' },
            { id: 'observacao', value: 'ObservaÃ§Ã£o' }
        ];
        this.displayedColumns = this.columnNames.map(function (x) { return x.id; });
    };
    DialogHistoricoFrequenciaComponent.prototype.getHistory = function () {
        var _this = this;
        this.data.history.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* take */])(1)).subscribe(function (map) {
            _this.dados = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableDataSource */](map);
            _this.dados.sort = _this.sortMarcacao;
            _this.dados.paginator = _this.paginator;
        });
    };
    DialogHistoricoFrequenciaComponent.prototype.applyFilter = function (filterValue) {
        this.dados.filter = filterValue.trim().toLowerCase();
    };
    DialogHistoricoFrequenciaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatPaginator */])
    ], DialogHistoricoFrequenciaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSort */])
    ], DialogHistoricoFrequenciaComponent.prototype, "sortMarcacao", void 0);
    DialogHistoricoFrequenciaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-historico-frequencia',
            template: __webpack_require__("./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], DialogHistoricoFrequenciaComponent);
    return DialogHistoricoFrequenciaComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogHistoricoFrequenciaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_historico_frequencia_component__ = __webpack_require__("./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DialogHistoricoFrequenciaModule = (function () {
    function DialogHistoricoFrequenciaModule() {
    }
    DialogHistoricoFrequenciaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatExpansionModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dialog_historico_frequencia_component__["a" /* DialogHistoricoFrequenciaComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__dialog_historico_frequencia_component__["a" /* DialogHistoricoFrequenciaComponent */]]
        })
    ], DialogHistoricoFrequenciaModule);
    return DialogHistoricoFrequenciaModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n          <div class=\"card-title font-weight h4\" align=\"center\">\r\n            <table>\r\n              <tr>\r\n                <td><b>ObservaÃ§Ã£o da nÃ£o assinatura pelo ponto Focal/ResponsÃ¡vel </b></td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body text-align-justify\">\r\n          <div mat-dialog-content style=\"font-size: 17px;\">\r\n            <div>\r\n              <textarea class=\"mdc-text-field__input\" maxlength=\"250\" rows=\"5\" style=\"min-width: 100%\"  [(ngModel)]=\"data.observacao\"   maxlength=\"160\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div mat-dialog-actions>\r\n            <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"salvar()\">\r\n              <i class=\"material-icons\">save</i>Salvar</button>\r\n              <button mat-raised-button class=\"btn btn-info pull-left\" (click)=\"limpar()\">\r\n                <i class=\"material-icons\">delete_forever</i>Limpar</button>\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color: gray;\">\r\n              <i class=\"material-icons\">close</i>Fechar</button>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogObservacaoAssinaturaFrequenciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DialogObservacaoAssinaturaFrequenciaComponent = (function () {
    function DialogObservacaoAssinaturaFrequenciaComponent(dialogRef, data, _frequeciaService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._frequeciaService = _frequeciaService;
        this.publicatestado = {};
    }
    DialogObservacaoAssinaturaFrequenciaComponent.prototype.ngOnInit = function () {
        this.carregarObservacao();
    };
    DialogObservacaoAssinaturaFrequenciaComponent.prototype.carregarObservacao = function () {
        var _this = this;
        this.data.getObservacao.subscribe(function (map) {
            _this.data.observacao = map.value;
        });
    };
    DialogObservacaoAssinaturaFrequenciaComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogObservacaoAssinaturaFrequenciaComponent.prototype.salvar = function () {
        var _this = this;
        var obj = {};
        obj.id = this.data.id;
        obj.observacao = this.data.observacao;
        this._frequeciaService.salvarObservacaoPontoFocal(obj).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* take */])(1)).subscribe(function (obj) {
            __WEBPACK_IMPORTED_MODULE_4_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("ObservaÃ§Ã£o salva com sucesso.", __WEBPACK_IMPORTED_MODULE_5_app_model_alert_type__["a" /* AlertType */].Success);
            _this.onNoClick();
        }, function (erro) {
            __WEBPACK_IMPORTED_MODULE_4_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(erro.error.message, __WEBPACK_IMPORTED_MODULE_5_app_model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogObservacaoAssinaturaFrequenciaComponent.prototype.limpar = function () {
        this.data.observacao = "";
    };
    DialogObservacaoAssinaturaFrequenciaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-observacao-frequencia',
            template: __webpack_require__("./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3_app_service_frequencia_service__["a" /* FrequenciaService */]])
    ], DialogObservacaoAssinaturaFrequenciaComponent);
    return DialogObservacaoAssinaturaFrequenciaComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogObservacaoAssinaturaFrequenciaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_observacao_assinatura_frequencia_component__ = __webpack_require__("./src/app/dialog/dialog-observacao-assinatura-frequencia/dialog-observacao-assinatura-frequencia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DialogObservacaoAssinaturaFrequenciaModule = (function () {
    function DialogObservacaoAssinaturaFrequenciaModule() {
    }
    DialogObservacaoAssinaturaFrequenciaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__dialog_observacao_assinatura_frequencia_component__["a" /* DialogObservacaoAssinaturaFrequenciaComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__dialog_observacao_assinatura_frequencia_component__["a" /* DialogObservacaoAssinaturaFrequenciaComponent */]]
        })
    ], DialogObservacaoAssinaturaFrequenciaModule);
    return DialogObservacaoAssinaturaFrequenciaModule;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-blueflem\" style=\"text-align:center\">\r\n          <div class=\"card-title font-weight h4\" align=\"center\">\r\n            <table>\r\n              <tr>\r\n                <td>\r\n                  <b>Reprovar</b>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body text-align-center\">\r\n          <div mat-dialog-content style=\"font-size: 17px;\">\r\n            <table class=\"table table-hover\">\r\n              <tr>\r\n                <td>\r\n                  <b>Hora da MarcaÃ§Ã£o: </b>{{data.marcacao.horaMarcacao}}</td>\r\n              </tr>\r\n            </table>\r\n            <div>\r\n              <div>ObservaÃ§Ã£o:</div>\r\n              <textarea class=\"mdc-text-field__input\" maxlength=\"200\" rows=\"5\" style=\"min-width: 100%\" [(ngModel)]=\"data.observacao\"></textarea>\r\n              <span style=\"color:red;font-size:80%\">Campo ObrigatÃ³rio</span>\r\n            </div>\r\n          </div>\r\n          <div mat-dialog-actions>\r\n            <button mat-raised-button class=\"btn btn-danger\" (click)=\"reprovar()\">\r\n              <i class=\"material-icons\">not_interested</i>Reprovar</button>\r\n            <button mat-button (click)=\"onNoClick()\" class=\"btn pull-right\" style=\"background-color: gray;\">\r\n              <i class=\"material-icons\">close</i>Fechar</button>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogReprovarMarcacoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_marcacoes_service__ = __webpack_require__("./src/app/service/marcacoes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_marcacao__ = __webpack_require__("./src/app/model/marcacao.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var DialogReprovarMarcacoesComponent = (function () {
    function DialogReprovarMarcacoesComponent(dialogRef, data, marcacoesService, emitirEventoService, user) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.marcacoesService = marcacoesService;
        this.emitirEventoService = emitirEventoService;
        this.user = user;
    }
    DialogReprovarMarcacoesComponent.prototype.ngOnInit = function () {
    };
    DialogReprovarMarcacoesComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogReprovarMarcacoesComponent.prototype.reprovar = function () {
        this.enviar(this.preencherMarcacoes());
    };
    DialogReprovarMarcacoesComponent.prototype.preencherMarcacoes = function () {
        var marc = new __WEBPACK_IMPORTED_MODULE_7__model_marcacao__["a" /* Marcacao */]();
        if (this.data.marcacao && this.data.marcacao.id) {
            marc.id = this.data.marcacao.id;
            marc.dataMarcacao = this.data.dataDia + " " + this.data.marcacao.horaMarcacao;
            marc.observacao = this.data.observacao;
            marc.usuarioValidador = this.user.matricula();
            marc.usuarioAtualizacao = this.user.matricula();
        }
        return marc;
    };
    DialogReprovarMarcacoesComponent.prototype.enviar = function (marcacao) {
        var _this = this;
        if (!marcacao.observacao) {
            __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Por favor preencha o campo observaÃ§Ã£o!", __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Error);
            return false;
        }
        this.marcacoesService.approveOrDisapprove(marcacao, "reprovada").subscribe(function (val) {
            __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('MarcaÃ§Ã£o reprovada com sucesso!', __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Success);
            _this.emitirEventoService.emitir("dialogReprovar", "dialogReprovar");
            _this.onNoClick();
        }, function (error) {
            var msg = error.error.message;
            if (!msg) {
                msg = "Ocorreu um erro inesperado!";
            }
            __WEBPACK_IMPORTED_MODULE_6__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(msg, __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    DialogReprovarMarcacoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-reprovar-marcacoes',
            template: __webpack_require__("./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_4__service_marcacoes_service__["a" /* MarcacoesService */],
            __WEBPACK_IMPORTED_MODULE_3__service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_data_service__["a" /* UserDataService */]])
    ], DialogReprovarMarcacoesComponent);
    return DialogReprovarMarcacoesComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogReprovarMarcacoesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_reprovar_marcacoes_component__ = __webpack_require__("./src/app/dialog/dialog-reprovar-marcacoes/dialog-reprovar-marcacoes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogReprovarMarcacoesModule = (function () {
    function DialogReprovarMarcacoesModule() {
    }
    DialogReprovarMarcacoesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatProgressSpinnerModule */]
            ],
            providers: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__dialog_reprovar_marcacoes_component__["a" /* DialogReprovarMarcacoesComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__dialog_reprovar_marcacoes_component__["a" /* DialogReprovarMarcacoesComponent */]]
        })
    ], DialogReprovarMarcacoesModule);
    return DialogReprovarMarcacoesModule;
}());



/***/ }),

/***/ "./src/app/diretives/has-permission.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasPermissionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HasPermissionDirective = (function () {
    function HasPermissionDirective(element, templateRef, viewContainer, userService) {
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.userService = userService;
        this.permissions = [];
    }
    HasPermissionDirective.prototype.ngOnInit = function () {
        this.permissions = this.userService.permissions();
    };
    Object.defineProperty(HasPermissionDirective.prototype, "hasPermission", {
        set: function (val) {
            this.permissao = val;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    HasPermissionDirective.prototype.updateView = function () {
        if (this.checkPermission()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    };
    HasPermissionDirective.prototype.checkPermission = function () {
        var hasPermission = false;
        this.permissions = this.userService.permissions();
        var _loop_1 = function (checkPermission) {
            var permissionFound = this_1.permissions.find(function (x) { return x.toUpperCase() === checkPermission.toUpperCase(); });
            if (permissionFound) {
                hasPermission = true;
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.permissao; _i < _a.length; _i++) {
            var checkPermission = _a[_i];
            _loop_1(checkPermission);
        }
        return hasPermission;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HasPermissionDirective.prototype, "hasPermission", null);
    HasPermissionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[hasPermission]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_1__service_user_data_service__["a" /* UserDataService */]])
    ], HasPermissionDirective);
    return HasPermissionDirective;
}());



/***/ }),

/***/ "./src/app/frequencia/frequencia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequenciaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frequencia_frequencia_component__ = __webpack_require__("./src/app/frequencia/frequencia/frequencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipe_enum_pipe__ = __webpack_require__("./src/app/pipe/enum.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipe_date_helper_pipe__ = __webpack_require__("./src/app/pipe/date-helper.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_dialog_dialog_confirm_frequencias_dialog_confirm_frequencias_module__ = __webpack_require__("./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_dialog_dialog_historico_frequencia_dialog_historico_frequencia_module__ = __webpack_require__("./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FrequenciaModule = (function () {
    function FrequenciaModule() {
    }
    FrequenciaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_12_app_dialog_dialog_confirm_frequencias_dialog_confirm_frequencias_module__["a" /* DialogConfirmFrequenciasModule */],
                __WEBPACK_IMPORTED_MODULE_13_app_dialog_dialog_historico_frequencia_dialog_historico_frequencia_module__["a" /* DialogHistoricoFrequenciaModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatAutocompleteModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__frequencia_frequencia_component__["a" /* FrequenciaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipe_enum_pipe__["a" /* EnumPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pipe_date_helper_pipe__["a" /* DateHelperPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__frequencia_frequencia_component__["a" /* FrequenciaComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipe_date_helper_pipe__["a" /* DateHelperPipe */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_8__pipe_enum_pipe__["a" /* EnumPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_frequencia_service__["a" /* FrequenciaService */],
                __WEBPACK_IMPORTED_MODULE_11_app_service_file_service__["a" /* FileService */]
            ]
        })
    ], FrequenciaModule);
    return FrequenciaModule;
}());



/***/ }),

/***/ "./src/app/frequencia/frequencia/frequencia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header card-header-danger\">\r\n          <h4 class=\"card-title\">FrequÃªncias</h4>\r\n          <p class=\"card-category\">Neste mÃ³dulo Ã© possÃ­vel validar, disponibilizar, reprovar, reabrir e verificar o\r\n            histÃ³rico das frequÃªncias</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form form [formGroup]=\"form\">\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                Filtros\r\n              </mat-expansion-panel-header>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                  <label for=\"filter\">MatrÃ­cula:</label>\r\n                  <input type=\"number\" class=\"form-control\" formControlName=\"matricula\" id=\"matricula\">\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <label for=\"filter\">MÃªs Ano:</label>\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"mesAno\" id=\"mesAno\"\r\n                    [textMask]=\"{mask: mask}\">\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <label for=\"situacao\">SituaÃ§Ã£o</label>\r\n                  <mat-select style=\"height: 50px; padding: 2px; padding-left: 10px;\" formControlName=\"situacao\"\r\n                    placeholder=\"Selecione...\" name=\"situacao\" id=\"situacao\">\r\n                    <mat-option *ngFor=\"let item of situacoes\" [value]=\"item\">\r\n                      {{item}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <label for=\"situacaoFuncionario\">SituaÃ§Ã£o Funcionario</label>\r\n                  <mat-select style=\"height: 50px; padding: 2px; padding-left: 10px;\" formControlName=\"situacaoFunc\"\r\n                    placeholder=\"Selecione...\" name=\"situacaoFunc\" id=\"situacaoFunc\">\r\n                    <mat-option *ngFor=\"let item of situacaoFuncionario\" [value]=\"item.situacao\">\r\n                      {{item.situacaoDesc}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" [hidden]=\"hideCombos\">\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input type=\"text\" [(ngModel)]=\"ngMunicipio\" placeholder=\"Municipio\" aria-label=\"Number\" matInput [formControl]=\"myControlMunicipio\" [matAutocomplete]=\"aut\">\r\n                    <mat-autocomplete #aut=\"matAutocomplete\">\r\n                      <mat-option *ngFor=\"let option of filteredMunicipios | async\" [value]=\"option.nome\" (onSelectionChange)=\"onSelectionChangedMunicipio($event,option)\">\r\n                        {{option.nome}}\r\n                      </mat-option>\r\n                    </mat-autocomplete>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <mat-form-field class=\"example-full-width\">\r\n                    <input type=\"text\" [(ngModel)]=\"ngDemandante\" placeholder=\"Demandante\" aria-label=\"Number\" matInput [formControl]=\"myControlDemandante\" [matAutocomplete]=\"auto\">\r\n                    <mat-autocomplete #auto=\"matAutocomplete\">\r\n                      <mat-option *ngFor=\"let option of filteredDemandantes | async\" [value]=\"option.nome\" (onSelectionChange)=\"onSelectionChangedDemandante($event,option)\">\r\n                        {{option.nome}}\r\n                      </mat-option>\r\n                    </mat-autocomplete>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <label for=\"anexo\">SituaÃ§Ã£o do Anexo:</label>\r\n                    <br/>\r\n                  <mat-radio-group formControlName=\"anexo\">\r\n                    <mat-radio-button value=\"1\">Com Anexo</mat-radio-button>\r\n                    <mat-radio-button value=\"2\">Sem Anexo</mat-radio-button>\r\n                    <mat-radio-button value=\"3\">Ambos</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <label for=\"filter\">Projetos:</label>\r\n                  <mat-form-field class=\"filter-full-width\">\r\n                    <input type=\"text\" placeholder=\"Buscar\" aria-label=\"Number\" matInput [formControl]=\"myControl\">\r\n                  </mat-form-field>\r\n                  <input type=\"checkbox\" value=\"0\" name=\"tudo\" (change)=\"marcarDesmarcar()\" [checked]=checked />\r\n                  <b>Todos os Projetos</b>\r\n                  <div class=\"flex layout-padding\" style=\"overflow-y: scroll; max-height:200px; padding-left: 25px\">\r\n                    <mat-option *ngFor=\"let item of filteredProjects | async\" [value]=\"item.nome\">\r\n                      <input type=\"checkbox\" value=\"{{item.codigoDominio}}\" name=\"tudo\"\r\n                        (change)=\"onCheckboxChange(item,$event)\" [checked]=\"(checked || projetosSelecionados(item))\" />\r\n                      {{item.nome}}\r\n                    </mat-option>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </mat-expansion-panel>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-2\">\r\n                <button mat-raised-button class=\"btn btn-info pull-left\" style=\"margin-top: 25px;margin-left: -2px;\"\r\n                  (click)=\"buscar(true,true)\" [hidden]=\"loading\">\r\n                  <i class=\"material-icons\">search</i>Buscar</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div [hidden]=\"!mostrarPesquisa || loading\" class=\"table-responsive\">\r\n            <mat-form-field>\r\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\r\n            </mat-form-field>\r\n            <mat-table #table [dataSource]=\"dados\" #sort=\"matSort\" matSort>\r\n              <ng-container matColumnDef=\"{{ column.id }}\" *ngFor=\"let column of columnNames\">\r\n                <mat-header-cell  *matHeaderCellDef mat-sort-header> {{column.value}} </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\">\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='VALIDADA'\"\r\n                    style=\"color: green\">{{element[column.id]}}</span>\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='REPROVADA'\"\r\n                    title=\"{{element.observacao}}\" style=\"color: red\">{{element[column.id]}}</span>\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='REABERTA'\" title=\"{{element.observacao}}\"\r\n                    style=\"color: blue\">{{element[column.id]}}</span>\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='DISPONIVEL'\"\r\n                    style=\"color: cornflowerblue\">{{element[column.id]}}</span>\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='CORRIGIDA'\"\r\n                    style=\"color:darkred\">{{element[column.id]}}</span>\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='FECHADA'\"\r\n                    style=\"color:blueviolet\">{{element[column.id]}}</span>\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='PEND_APROVACAO_OUTRAS_FALTAS'\"\r\n                    style=\"color:indianred\">{{element[column.id]}}</span>\r\n                  <span *ngIf=\"column.id!='id' && element.situacaoFrequencia=='PENDENTE_APROVACAO_MEDICA'\"\r\n                    style=\"color:indianred\">{{element[column.id]}}</span>  \r\n                  <span *ngIf=\"column.id!='id' \r\n                                              && element.situacaoFrequencia!='VALIDADA' \r\n                                              && element.situacaoFrequencia!='DISPONIVEL'\r\n                                              && element.situacaoFrequencia!='REABERTA'\r\n                                              && element.situacaoFrequencia!='REPROVADA'\r\n                                              && element.situacaoFrequencia!='CORRIGIDA'\r\n                                              && element.situacaoFrequencia!='FECHADA'\r\n                                              && element.situacaoFrequencia!='PENDENTE_APROVACAO_MEDICA'\r\n                                              && element.situacaoFrequencia!='PEND_APROVACAO_OUTRAS_FALTAS'\"><b>{{element[column.id]}}</b></span>\r\n                  <table *ngIf=\"column.id=='id'\" [hidden]=\"element.loading\">\r\n                    <td *ngIf=\"hasPermission('baixarFrequenciaSRF')\">\r\n                      <span *ngIf=\"element.filePath\" style=\"cursor: pointer;\" (click)=\"downloadPDF(element)\" title=\"Baixar\">\r\n                        <i class=\"material-icons\">cloud_download</i>\r\n                      </span>\r\n                    </td>\r\n                    <td *ngIf=\"hasPermission('validarRegFreq')\">\r\n                      <span *ngIf=\"element.situacaoFrequencia=='ABERTA' || element.situacaoFrequencia=='REABERTA' || element.situacaoFrequencia=='CORRIGIDA'\" style=\"cursor: pointer;color:green;padding-left:10px;padding-right: 10px;\"\r\n                        (click)=\"aprovar(element)\" title=\"Validar\">\r\n                        <i class=\"material-icons\">done</i>\r\n                      </span>\r\n                    </td>\r\n                    <td *ngIf=\"hasPermission('disponibilizarFrequencia') \">\r\n                      <span *ngIf=\"element.situacaoFrequencia=='VALIDADA' && element.codProjeto=='1000'\" style=\"cursor: pointer;color:cornflowerblue\" (click)=\"disponibilizarFolha(element)\"\r\n                        title=\"Disponibilizar\">\r\n                        <i class=\"material-icons\">vertical_align_top</i>\r\n                      </span>\r\n                    </td>\r\n                    <td *ngIf=\"hasPermission('reprovarFrequencia')\">\r\n                      <span *ngIf=\"element.situacaoFrequencia=='ABERTA' || element.situacaoFrequencia=='REABERTA' || element.situacaoFrequencia=='CORRIGIDA'\" style=\"cursor: pointer;color:red\" (click)=\"openDialogReprovar(element)\" title=\"Reprovar\">\r\n                        <i class=\"material-icons\">not_interested</i>\r\n                      </span>\r\n                    </td>\r\n                    <td >\r\n                      <span *ngIf=\"hasPermission('reabrirFrequencia') && element.situacaoFrequencia=='VALIDADA' || element.situacaoFrequencia=='DISPONIVEL' && element.situacaoFrequencia!='FECHADA'\" style=\"cursor: pointer;color:blue\" (click)=\"openDialogReabrir(element)\"\r\n                        title=\"Reabrir Folha\">\r\n                        <i class=\"material-icons\">lock_open</i>\r\n                      </span>\r\n                    </td>\r\n                    <td *ngIf=\"hasPermission('histFreSRF')\">\r\n                      <span *ngIf=\"element.version > '0'\" (click)=\"openDialogHistorico(element)\" style=\"cursor: pointer\" title=\"Historico\">\r\n                        <i class=\"material-icons\">event_note</i>\r\n                      </span>\r\n                    </td>\r\n                    <td *ngIf=\"hasPermission('acessoAdmFrequencia')\">\r\n                      <span style=\"cursor: pointer;color: darkgray\" title=\"Administrar FrequÃªncia\"\r\n                        (click)=\"administrarPonto(element)\">\r\n                        <i class=\"material-icons\">description</i>\r\n                      </span>\r\n                    </td>\r\n                  </table>\r\n                  <mat-spinner *ngIf=\"column.id=='id'\" [diameter]=\"40\" [hidden]=\"!element.loading\">\r\n                  </mat-spinner> \r\n                </mat-cell>\r\n              </ng-container>\r\n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n            <mat-paginator [length]=\"dados.data.length\" \r\n                           [pageSize]=\"5\" \r\n                           [pageSizeOptions]=\"[5, 10, 20]\"\r\n                           (page) = \"paginatorEvent($event)\"\r\n                           [pageIndex]=\"pageIndex\" \r\n                           showFirstLastButtons  \r\n                           #paginator></mat-paginator>\r\n          </div>\r\n          <div [hidden]=\"!loading\" align=\"center\" style=\"width: 100%\">\r\n            <h4>Buscando...</h4>\r\n            <mat-spinner [diameter]=\"40\"></mat-spinner>\r\n          </div>\r\n          <button mat-raised-button class=\"btn btn-success pull-left\" (click)=\"exportAsXLSX(true)\"\r\n            [hidden]=\"!mostrarPesquisa || loading\">\r\n            <img src=\"/assets/img/icons8-microsoft-excel-48.png\" style=\"width:23px\" />Exportar XLSX</button>\r\n            <button mat-raised-button class=\"btn pull-right\" (click)=\"baixarEmLote()\" style=\"background:white;color:black;\"\r\n            [hidden]=\"isMatricula || loadingZip\">\r\n            <img src=\"/assets/img/iconfinder_icon-124-document-file-zip_315084.png\" style=\"width:23px\" />Baixar Em lote</button> \r\n            <div [hidden]=\"!loadingZip\" align=\"center\" style=\"width:100px\" class=\"pull-right\">\r\n              <h4>Baixando...</h4>\r\n              <mat-spinner [diameter]=\"40\"></mat-spinner> \r\n            </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/frequencia/frequencia/frequencia.component.scss":
/***/ (function(module, exports) {

module.exports = ".pagination {\n  display: inline-block; }\n\n.pagination a {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  -webkit-transition: background-color .3s;\n  transition: background-color .3s;\n  border: 1px solid #ddd; }\n\n.pagination a.active {\n  background-color: red;\n  color: white;\n  border: 1px solid  red; }\n"

/***/ }),

/***/ "./src/app/frequencia/frequencia/frequencia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequenciaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_service_file_service__ = __webpack_require__("./src/app/service/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_dialog_dialog_confirm_frequencias_dialog_confirm_frequencias_component__ = __webpack_require__("./src/app/dialog/dialog-confirm-frequencias/dialog-confirm-frequencias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_dialog_dialog_historico_frequencia_dialog_historico_frequencia_component__ = __webpack_require__("./src/app/dialog/dialog-historico-frequencia/dialog-historico-frequencia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_service_user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_service_excel_service__ = __webpack_require__("./src/app/service/excel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_service_funcionariolocal_service__ = __webpack_require__("./src/app/service/funcionariolocal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_service_dashboard_service__ = __webpack_require__("./src/app/service/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var FrequenciaComponent = (function () {
    function FrequenciaComponent(_frequeciaService, _emitirEventoService, _fileService, _dialog, _user, _router, _avRoute, _service, _excelService, _funcionarioService) {
        this._frequeciaService = _frequeciaService;
        this._emitirEventoService = _emitirEventoService;
        this._fileService = _fileService;
        this._dialog = _dialog;
        this._user = _user;
        this._router = _router;
        this._avRoute = _avRoute;
        this._service = _service;
        this._excelService = _excelService;
        this._funcionarioService = _funcionarioService;
        this.mask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,];
        this.situacoes = [];
        this.loading = false;
        this.loadingZip = false;
        this.mostrarPesquisa = false;
        this.dados = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTableDataSource */]();
        this.checkedList = [];
        this.frequencias = [];
        this.displayedColumns = [];
        this.codProjeto = null;
        this.checked = false;
        this.myControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.checkedListRetorno = [];
        this.isReprovar = false;
        this.isReabrir = false;
        this.isRadioValueInicial = '3';
        this.pageIndex = 0;
        this.situacaoFuncionario = [];
        this.paths = [];
        this.municipios = [];
        this.hideCombos = true;
        this.myControlDemandante = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.myControlMunicipio = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.isBuscarNovamente = true;
        this.isMatricula = true;
    }
    FrequenciaComponent.prototype.ngOnInit = function () {
        this._buildForm();
        this.getSituacaoFrequencia();
        this.columns();
        this.emiter();
        this.valueRadioInicial();
        this.parametrosDeRetorno();
        this.carregarProjetos();
        this.getSituacaoFuncionario();
        this.comboMunicipio();
    };
    FrequenciaComponent.prototype._buildForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            'mesAno': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            'situacao': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            'matricula': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            'anexo': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            'situacaoFunc': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            'demandante': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            'municipio': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('')
        });
    };
    FrequenciaComponent.prototype.valueRadioInicial = function () {
        this.form.controls['anexo'].patchValue(this.isRadioValueInicial);
    };
    FrequenciaComponent.prototype.comboMunicipio = function () {
        var _this = this;
        this._frequeciaService.obterMuniciopio().subscribe(function (item) {
            _this.municipios = item;
            _this.filteredMunicipios = _this.myControlMunicipio.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* map */])(function (value) { return _this._filtered(value, _this.municipios); }));
        }, function (erro) {
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Erro ao carregar Municipio", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    FrequenciaComponent.prototype.comboDemandante = function (id) {
        var _this = this;
        this._frequeciaService.obterDemandante(id).subscribe(function (item) {
            _this.demandantes = item;
            _this.filteredDemandantes = _this.myControlDemandante.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* map */])(function (value) { return _this._filtered(value, _this.demandantes); }));
        }, function (erro) {
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Erro ao carregar Demandante", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    FrequenciaComponent.prototype.getSituacaoFrequencia = function () {
        var _this = this;
        var array = [];
        this._frequeciaService.getSituacaoFrequencia().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["d" /* take */])(1)).subscribe(function (item) {
            array = item;
            for (var i = 0; i < array.length; i++) {
                _this.situacoes[i] = array[i];
            }
        });
        this.situacoes[9] = 'Todas';
    };
    FrequenciaComponent.prototype.applyFilter = function (value) {
        this.dados.filter = value.trim().toLowerCase();
    };
    FrequenciaComponent.prototype.downloadPDF = function (item) {
        item.loading = true;
        this._fileService.frequenciaJoinAtestadoJoinFerias(item.id).subscribe(function (response) {
            var url = window.URL.createObjectURL(response);
            var type = response.type.split("/");
            var a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.href = url;
            a.download = "frequencia.pdf";
            console.log(response);
            a.click();
            item.loading = false;
        }, function (error) {
            item.loading = false;
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Arquivo nÃ£o localizado", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    FrequenciaComponent.prototype.existeMatricula = function () {
        if (this.form.controls['matricula'].value) {
            this.isMatricula = false;
        }
        else {
            this.isMatricula = true;
        }
    };
    FrequenciaComponent.prototype.buscar = function (loading, isInicial) {
        var _this = this;
        var mensagem = this.validarCampos();
        if (mensagem.length == 0) {
            this.loading = loading;
            var obj = this.objetoPesquisa(isInicial);
            this.isBuscarNovamente = true;
            this.existeMatricula();
            this._frequeciaService.getFrequenciasParaValidacao(obj).subscribe(function (item) {
                _this.frequencias = item;
                _this.paths = item.filePath;
                _this.dados = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTableDataSource */](item);
                _this.dados.sort = _this.sort;
                _this.dados.paginator = _this.paginator;
                _this.loading = false;
                _this.mostrarPesquisa = true;
                _this.isReprovar = false;
                _this.isReabrir = false;
            }, function (erro) {
                __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(erro.error.message, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
                _this.loading = false;
                _this.mostrarPesquisa = false;
                _this.isReprovar = false;
                _this.isReabrir = false;
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        }
    };
    FrequenciaComponent.prototype.codigoProjetoSelecionado = function () {
        var i = 0;
        var ids = [];
        this.checkedList.forEach(function (item) {
            if (item) {
                if (item.codigoDominio) {
                    ids[i] = item.codigoDominio;
                }
                else if (!item.codigoDominio) {
                    ids[i] = item;
                }
                i++;
            }
        });
        if (ids.length == 0) {
            ids = null;
        }
        return ids;
    };
    FrequenciaComponent.prototype.columns = function () {
        this.columnNames = [
            { id: 'matricula', value: 'MatrÃ­cula' },
            { id: 'nome', value: 'Nome' },
            { id: 'competencia', value: 'MÃªs Ano' },
            { id: 'projeto', value: 'Projeto' },
            { id: 'situacaoFrequenciaConcatenada', value: 'SituaÃ§Ã£o' },
            { id: 'id', value: 'AÃ§Ã£o' }
        ];
        this.displayedColumns = this.columnNames.map(function (x) { return x.id; });
    };
    FrequenciaComponent.prototype.aprovar = function (item) {
        var _this = this;
        item.loading = true;
        this.loading = false;
        this._frequeciaService.validarFrequencia(item.id).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["d" /* take */])(1)).subscribe(function (obj) {
            item.loading = false;
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("FrequÃªncia aprovada com sucesso.", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Success);
            _this.buscar(false, false);
        }, function (erro) {
            var mensagem = erro.error.message;
            item.loading = false;
            if (!mensagem) {
                mensagem = "Ocorreu um erro inesperado!";
            }
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    FrequenciaComponent.prototype.disponibilizarFolha = function (item) {
        var _this = this;
        item.loading = true;
        this.loading = false;
        this._frequeciaService.disponiblizarFolha(item.id).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["d" /* take */])(1)).subscribe(function (response) {
            item.loading = true;
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("FrequÃªncia disponibilizada com sucesso!", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Success);
            _this.buscar(false, false);
        }, function (error) {
            item.loading = false;
            var mensagem = error.error.message;
            if (!mensagem) {
                mensagem = "Ocorreu um erro inesperado!";
            }
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    FrequenciaComponent.prototype.validarCampos = function () {
        var isValid = this.isReabrir || this.isReabrir;
        if (!this.form.controls['matricula'].value
            && !this.form.controls['situacao'].value
            && !this.form.controls['mesAno'].value
            && (this.checkedList != null && this.checkedList.length == 0)
            && !isValid) {
            return "Selecione pelo menos um desses filtros: MatrÃ­cula, MÃªs Ano, SituaÃ§Ã£o ou Projetos";
        }
        return "";
    };
    FrequenciaComponent.prototype.getSituacaoSelecionada = function () {
        var situacao = this.form.controls['situacao'].value;
        if (situacao && situacao != 'Todas') {
            return situacao;
        }
        else {
            return null;
        }
    };
    FrequenciaComponent.prototype.getSituacaoFuncionarioSelecionada = function () {
        var situacao = this.form.controls['situacaoFunc'].value;
        if (situacao && situacao != 'Todas') {
            return situacao;
        }
        else {
            return null;
        }
    };
    FrequenciaComponent.prototype.openDialogReprovar = function (item) {
        this.openDialog(item, true);
    };
    FrequenciaComponent.prototype.openDialogReabrir = function (item) {
        this.openDialog(item, false);
    };
    FrequenciaComponent.prototype.openDialog = function (item, reprovar) {
        item.observacao = null;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_9_app_dialog_dialog_confirm_frequencias_dialog_confirm_frequencias_component__["a" /* DialogConfirmFrequenciasComponent */], {
            width: '800px',
            data: {
                obj: item,
                reprovar: reprovar
            }
        });
    };
    FrequenciaComponent.prototype.openDialogHistorico = function (item) {
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_10_app_dialog_dialog_historico_frequencia_dialog_historico_frequencia_component__["a" /* DialogHistoricoFrequenciaComponent */], {
            width: '800px',
            data: {
                history: this._frequeciaService.getHistory(item.id),
                competencia: item.competencia
            }
        });
    };
    FrequenciaComponent.prototype.emiter = function () {
        var _this = this;
        this._emitirEventoService.mensagem.subscribe(function (obj) {
            if (obj.data == 'reprovar') {
                _this.isReprovar = true;
            }
            else if (obj.data == 'reabrir') {
                _this.isReabrir = true;
            }
            if (_this.isReprovar || _this.isReabrir) {
                _this.buscar(true, false);
            }
        });
    };
    FrequenciaComponent.prototype.administrarPonto = function (item) {
        var codProjeto = null;
        var codProjetoStr = this.codProjetoStr();
        if (!this.codProjetoRetorno && this.codProjetoRetorno == codProjetoStr) {
            codProjeto = this.codProjetoRetorno;
        }
        else {
            codProjeto = codProjetoStr;
        }
        this._router.navigate(['/administrar-ponto'], {
            queryParams: {
                matriculaPesquisa: this.form.controls['matricula'].value,
                matricula: item.matricula,
                nome: item.nome,
                competencia: item.competencia,
                competenciaPesquisa: this.form.controls['mesAno'].value,
                codProjeto: item.codProjeto,
                codProjetoPesquisa: codProjeto,
                situacaoFrequencia: this.getSituacaoSelecionada(),
                anexo: this.form.controls['anexo'].value,
                voltar: true,
                pageIndex: this.pageIndex,
                returnUrl: this._router.url,
                situacaoFuncionario: this.getSituacaoFuncionarioSelecionada()
            },
            skipLocationChange: true
        });
    };
    FrequenciaComponent.prototype.hasPermission = function (permission) {
        return this._user.hasPermission(permission);
    };
    FrequenciaComponent.prototype.objetoPesquisa = function (isInicial) {
        var codProjeto = this.splitCodProjeto();
        if (!codProjeto || isInicial) {
            codProjeto = this.codigoProjetoSelecionado();
        }
        var anexo = this.form.controls['anexo'].value;
        var isAnexo = false;
        var isTodas = false;
        switch (anexo) {
            case '1':
                isAnexo = true;
                break;
            case '2':
                isAnexo = false;
                break;
            default:
                isTodas = true;
        }
        var obj = {
            matricula: this.form.controls['matricula'].value,
            competencia: this.form.controls['mesAno'].value != "" ? this.form.controls['mesAno'].value : null,
            situacaoFrequenciaDescicao: this.getSituacaoSelecionada(),
            codProjetos: codProjeto,
            isAnexo: isAnexo,
            isTodasSituacoes: isTodas,
            situacaoFuncionario: this.getSituacaoFuncionarioSelecionada(),
            demandante: this.idDemandante,
            municipio: this.idMunicipio
        };
        return obj;
    };
    FrequenciaComponent.prototype.parametrosDeRetorno = function () {
        var returnADMF = this._avRoute.snapshot.queryParamMap.get("returnADMF");
        if (returnADMF) {
            var matricula = this._avRoute.snapshot.queryParamMap.get("matricula");
            var competencia = this._avRoute.snapshot.queryParamMap.get("competencia");
            var situacaoFrequencia = this._avRoute.snapshot.queryParamMap.get("situacaoFrequencia");
            var anexo = this._avRoute.snapshot.queryParamMap.get("anexo");
            var situacaoFuncionario = this._avRoute.snapshot.queryParamMap.get("situacaoFuncionario");
            this.form.controls['matricula'].patchValue(matricula);
            this.form.controls['mesAno'].patchValue(competencia);
            this.form.controls['situacao'].patchValue(situacaoFrequencia);
            this.form.controls['anexo'].patchValue(anexo);
            this.form.controls['situacaoFunc'].patchValue(situacaoFuncionario);
            this.codProjetoRetorno = this._avRoute.snapshot.queryParamMap.get("codProjeto");
            if (this.codProjetoRetorno) {
                this.checkedListRetorno = this.splitCodProjeto();
                this.checkedList = this.checkedListRetorno;
            }
            if (this._avRoute.snapshot.queryParamMap.get("pageIndex")) {
                this.pageIndex = Number(this._avRoute.snapshot.queryParamMap.get("pageIndex"));
            }
            this.buscar(true, false);
        }
    };
    FrequenciaComponent.prototype.splitCodProjeto = function () {
        var array = null;
        if (this.codProjetoRetorno) {
            array = [];
            array = this.codProjetoRetorno.split(",");
        }
        return array;
    };
    FrequenciaComponent.prototype.codProjetoStr = function () {
        this.codProjeto = [];
        this.codProjeto = this.codigoProjetoSelecionado();
        var idStr = null;
        var i = 0;
        if (this.codProjeto) {
            this.codProjeto.forEach(function (item) {
                if (i > 0) {
                    idStr += ", " + item;
                }
                else {
                    idStr = item;
                }
                i++;
            });
        }
        return idStr;
    };
    FrequenciaComponent.prototype.carregarProjetos = function () {
        var _this = this;
        this._service.projetos().subscribe(function (projetos) {
            _this.projetos = projetos;
            _this.filteredProjects = _this.myControl.valueChanges
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* map */])(function (value) { return _this._filter(value); }));
        });
    };
    FrequenciaComponent.prototype.marcarDesmarcar = function () {
        if (this.checked)
            this.limparTodos();
        else
            this.marcarTodos();
    };
    FrequenciaComponent.prototype.limparTodos = function () {
        this.checked = false;
        this.checkedList = [];
        this.checkedListRetorno = [];
    };
    ;
    FrequenciaComponent.prototype.marcarTodos = function () {
        this.checked = true;
        this.checkedList = [];
        for (var i = 0; i < this.projetos.length; i++) {
            this.checkedList.push(this.projetos[i]);
        }
    };
    ;
    FrequenciaComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.projetos.filter(function (option) { return option.nome.toLowerCase().includes(filterValue); });
    };
    FrequenciaComponent.prototype.onCheckboxChange = function (option, event) {
        var checkedAux = this.checkedList;
        if (event.target.checked) {
            for (var i = 0; i < this.projetos.length; i++) {
                for (var j = 0; j < checkedAux.length; j++) {
                    if (this.projetos[i].codigoDominio == checkedAux[j]) {
                        this.checkedList.push(this.projetos[i]);
                    }
                }
            }
            this.checkedList.push(option);
        }
        else {
            for (var i = 0; i < this.projetos.length; i++) {
                if ((this.checkedList[i] == option) || (this.checkedList[i] == option.codigoDominio)) {
                    this.checkedList.splice(i, 1);
                }
            }
        }
        this.showDemandanteMunicipio();
    };
    FrequenciaComponent.prototype.projetosSelecionados = function (obj) {
        for (var i = 0; i < this.checkedListRetorno.length; i++) {
            if (obj.codigoDominio == this.checkedListRetorno[i]) {
                return true;
            }
        }
        return false;
    };
    FrequenciaComponent.prototype.exportAsXLSX = function (isInicial) {
        var _this = this;
        var mensagem = this.validarCampos();
        if (mensagem.length == 0) {
            var dados_1 = [];
            this.frequencias.forEach(function (i) {
                dados_1.push({
                    "MatrÃ­cula": i.matricula,
                    "Nome": i.nome,
                    "MÃªs ano": i.competencia,
                    "Projeto": i.projeto,
                    "SituaÃ§Ã£o": i.situacaoFrequenciaConcatenada
                });
                _this.isReprovar = false;
                _this.isReabrir = false;
            });
            this._excelService.exportAsExcelFile(dados_1, "FrequÃªncia");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(mensagem, __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        }
    };
    FrequenciaComponent.prototype.paginatorEvent = function (event) {
        this.pageIndex = event.pageIndex;
    };
    FrequenciaComponent.prototype.getSituacaoFuncionario = function () {
        var _this = this;
        var array = [];
        this._funcionarioService.getSituacaoFuncionario().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["d" /* take */])(1)).subscribe(function (item) {
            array = item;
            for (var i = 0; i < array.length; i++) {
                _this.situacaoFuncionario[i] = array[i];
            }
        });
        // this.situacoes[9] = 'Todas';
    };
    FrequenciaComponent.prototype.baixarEmLote = function () {
        var _this = this;
        var matricula = this.form.controls['matricula'].value;
        this.loadingZip = true;
        this._frequeciaService.downloadFrequenciasZip(matricula).subscribe(function (response) {
            var a = document.createElement('a');
            var blob = new Blob([response], { 'type': "application/zip" });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = "arquivos.zip";
            a.click();
            _this.loadingZip = false;
            _this._frequeciaService.clearFilesZip().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["d" /* take */])(1)).subscribe();
        }, function (erro) {
            console.log(erro);
            _this.loadingZip = false;
            __WEBPACK_IMPORTED_MODULE_2__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Erro ao baixar FrequÃªncias", __WEBPACK_IMPORTED_MODULE_3__model_alert_type__["a" /* AlertType */].Error);
        });
    };
    FrequenciaComponent.prototype.showDemandanteMunicipio = function () {
        var hide = true;
        if (this.checkedList.length == 0) {
            this.hideCombos = true;
        }
        for (var i = 0; i < this.checkedList.length; i++) {
            if (this.checkedList[i].codigoDominio == 1000) {
                hide = false;
                break;
            }
        }
        ;
        if (!hide) {
            this.hideCombos = false;
        }
        else {
            this.ngDemandante = '';
            this.ngMunicipio = '';
            this.hideCombos = true;
        }
    };
    FrequenciaComponent.prototype.onSelectionChangedDemandante = function ($event, option) {
        this.idDemandante = option.id;
    };
    FrequenciaComponent.prototype.onSelectionChangedMunicipio = function ($event, option) {
        this.idMunicipio = option.id;
        this.comboDemandante(option.id);
    };
    FrequenciaComponent.prototype._filtered = function (value, lista) {
        var filterValue = value.toLowerCase();
        return lista.filter(function (option) { return option.nome.toLowerCase().includes(filterValue); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('paginator'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatPaginator */])
    ], FrequenciaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sort'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatSort */])
    ], FrequenciaComponent.prototype, "sort", void 0);
    FrequenciaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-frequencia',
            template: __webpack_require__("./src/app/frequencia/frequencia/frequencia.component.html"),
            styles: [__webpack_require__("./src/app/frequencia/frequencia/frequencia.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_frequencia_service__["a" /* FrequenciaService */],
            __WEBPACK_IMPORTED_MODULE_6_app_service_emitir_evento_service__["a" /* EmitirEventoService */],
            __WEBPACK_IMPORTED_MODULE_8_app_service_file_service__["a" /* FileService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_11_app_service_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_15_app_service_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_13_app_service_excel_service__["a" /* ExcelService */],
            __WEBPACK_IMPORTED_MODULE_14_app_service_funcionariolocal_service__["a" /* FuncionariolocalService */]])
    ], FrequenciaComponent);
    return FrequenciaComponent;
}());



/***/ }),

/***/ "./src/app/helper/helper-frequencia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperFrequencia; });
var HelperFrequencia = (function () {
    function HelperFrequencia() {
    }
    HelperFrequencia.showNotification = function (msg, type) {
        $.notify({
            icon: "notifications",
            message: msg
        }, {
            type: type,
            timer: 4000,
            placement: {
                from: 'top',
                align: 'right'
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    HelperFrequencia.isNull = function (valueOne, valueTwo) {
        if (valueOne)
            return valueOne;
        return valueTwo;
    };
    HelperFrequencia.extPermitidas = function (name) {
        var valida = false;
        var array = [];
        array = name.split(".");
        var ext = ['jpg', 'jpeg', 'png', 'pdf', 'jpeg', 'PDF', 'JPG', 'JPEG', 'PNG'];
        ext.forEach(function (i) {
            if (array[array.length - 1] == i) {
                valida = true;
            }
        });
        return valida;
    };
    HelperFrequencia.validarNomeArquivo = function (name) {
        var array = [];
        var valido = true;
        array = name.split(".");
        if (array.length > 2) {
            valido = false;
        }
        if (name.indexOf("/") != -1 || name.indexOf("\\") != -1) {
            valido = false;
        }
        return valido;
    };
    HelperFrequencia.getMaxSizeFile = function () {
        return 5242880;
    };
    HelperFrequencia.msgExtInvalidas = function () {
        return "Erro : Apenas estes formatos de arquivos sÃ£o vÃ¡lidos:'jpg, jpeg, png e pdf'";
    };
    HelperFrequencia.msgTamanhoInvalido = function () {
        return 'Erro :O tamanho do arquivo Ã© superior a 5 Megabytes';
    };
    HelperFrequencia.msgNomeInvalido = function () {
        return 'Erro : O nome do arquivo nÃ£o deve possuir (.) ou (/) !';
    };
    return HelperFrequencia;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__ = __webpack_require__("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_4_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* Location */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" align=\"center\">\r\n    <div class=\"container-fluid col-lg-6 col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"separator\"></div>\r\n            <div class=\"separator\"></div>\r\n\r\n            <div [hidden]=\"!loading\" class=\"container-fluid col-lg-6 col-md-12\" align=\"center\">\r\n                <div class=\"card\" style=\"padding: 50px;\">\r\n                    <h2>Autenticando...</h2>\r\n                    <mat-spinner></mat-spinner>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\" [hidden]=\"loading\">\r\n                <div class=\"card-header card-header-danger\">\r\n                    <h4 class=\"card-title\">Sistema de Registro de FrequÃªncia</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <img src=\"assets/img/frequencia.png\" alt=\"Registro de Pontos\" />\r\n                    <div class=\"separator\"></div>\r\n                    <form [formGroup]=\"newForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 text-left\">\r\n                                <label for=\"filter\">UsuÃ¡rio:</label>\r\n                                <input type=\"text\" formControlName=\"login\" class=\"form-control\" name=\"login\" id=\"login\">\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 text-left\">\r\n                                <label for=\"filter\">Senha:</label>\r\n                                <input formControlName=\"password\" class=\"form-control\" name=\"password\" id=\"password\" type=\"password\" />\r\n                            </div>\r\n                        </div>\r\n                        <button mat-raised-button (click)=\"autenticar()\" class=\"btn btn-info pull-left\">\r\n                            <i class=\"material-icons\">person</i>\r\n                            Login</button>\r\n                        <button mat-raised-button (click)=\"baterPonto()\" class=\"btn btn-danger pull-right\">\r\n                            <i class=\"material-icons\">timer</i>\r\n                            Registrar FrequÃªncia</button>\r\n                        <div class=\"clearfix\"></div>\r\n                        <div style=\"width: 100%; text-align: left;font-size: 12px\">\r\n                            <a target=\"_blank\" href=\"http://as.flem.org.br/recuperarsenha.xhtml\">Esqueceu a senha?</a>\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                        <div class=\"clearfix\"></div>\r\n                        <div class=\"clearfix\"></div>\r\n                        <mat-hint align=\"start\" style=\"float: left !important; font-weight: bold;\">Obs.: Se for realizar o acesso pela primeira vez por favor realizar a <a target=\"_blank\" href=\"http://extranet.flem.org.br/\">AlteraÃ§Ã£o de senha</a></mat-hint>\r\n                        <div class=\"clearfix\"></div>\r\n                        <mat-hint align=\"start\" style=\"float: left !important; font-weight: bold;\">Obs.: Caso tenha solicitado uma nova senha por favor realizar a <a target=\"_blank\" href=\"http://extranet.flem.org.br/\">AlteraÃ§Ã£o de senha</a></mat-hint>\r\n                        \r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  border-radius: 50%; }\n\nh2 {\n  font-size: 18px;\n  color: #666; }\n\nbody {\n  background: \"../assets/img/bg-image-login.jpg\" no-repeat center !important;\n  background-size: cover !important; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_autenticacao_service__ = __webpack_require__("https://raw.githubusercontent.com/JLuucas/TNC/master/autenticacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, autenticacaoService) {
        this.route = route;
        this.router = router;
        this.autenticacaoService = autenticacaoService;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.autenticacaoService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.autenticar = function () {
        var _this = this;
        if (!this.newForm.valid) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Todos os campos sÃ£o obrigatÃ³rios", __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Warning);
            return;
        }
        this.loading = true;
        var obj = { username: this.newForm.value.login, password: this.newForm.value.password };
        this.autenticacaoService.login(obj)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.baterPonto = function () {
        this.router.navigate(['registrar-ponto']);
    };
    LoginComponent.prototype.buildForm = function () {
        this.newForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'login': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_autenticacao_service__["a" /* AutenticacaoService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_autenticacao_service__ = __webpack_require__("https://raw.githubusercontent.com/JLuucas/TNC/master/autenticacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_emitir_evento_service__ = __webpack_require__("./src/app/service/emitir-evento.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatProgressSpinnerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__service_autenticacao_service__["a" /* AutenticacaoService */],
                __WEBPACK_IMPORTED_MODULE_9__service_emitir_evento_service__["a" /* EmitirEventoService */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/model/alert-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Error"] = "danger";
    AlertType["Info"] = "info";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/model/marcacao.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Marcacao; });
var Marcacao = (function () {
    function Marcacao() {
    }
    return Marcacao;
}());



/***/ }),

/***/ "./src/app/pipe/date-helper.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateHelperPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateHelperPipe = (function () {
    function DateHelperPipe() {
        this.semana = ["Segunda-Feira", "TerÃ§a-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "SÃ¡bado", "Domingo"];
    }
    DateHelperPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value) {
            if (args[0] === 'time') {
                return this.getTime(value);
            }
            else if (args[0] === 'date') {
                return this.getDate(value);
            }
            else if (args[0] === 'number') {
                return this.getDoisDigitos(value);
            }
            else if (args[0] === 'dayOfWeek') {
                return this.getDiaDaSemana(value);
            }
        }
        else {
            return "00:00";
        }
    };
    DateHelperPipe.prototype.getTime = function (value) {
        var horas = Number(value / 60);
        var minutos = Number(value % 60);
        var horaFormatada = this.getHorario(this.getDoisDigitos(Math.floor(horas)), this.getDoisDigitos(Math.floor(minutos)));
        if (horaFormatada.includes("-")) {
            horaFormatada = horaFormatada.replace(/-/g, "");
            horaFormatada = "-" + horaFormatada;
        }
        return horaFormatada;
    };
    DateHelperPipe.prototype.getDate = function (date) {
        if (Array.isArray(date)) {
            var dia = this.getDoisDigitos(date[2]);
            var mes = this.getDoisDigitos(date[1]);
            var ano = date[0];
            return dia + "/" + mes + "/" + ano;
        }
        else {
            var dia = this.getDoisDigitos(date.dayOfMonth);
            var mes = this.getDoisDigitos(date.monthValue);
            var ano = date.year;
            return dia + "/" + mes + "/" + ano;
        }
    };
    DateHelperPipe.prototype.getDoisDigitos = function (val) {
        if (val < 10 && val > -10) {
            return 0 + "" + val;
        }
        return val;
    };
    DateHelperPipe.prototype.getHorario = function (hora, minutos) {
        var horaPedido = hora + ":" + minutos;
        return horaPedido;
    };
    DateHelperPipe.prototype.getDiaDaSemana = function (data) {
        data = data.substring(6, 10) + "-" + data.substring(3, 5) + "-" + data.substring(0, 2);
        var d = new Date(data);
        return this.semana[d.getDay()];
    };
    DateHelperPipe.prototype.horaParaMinutos = function (horaFormatada) {
        var _a = horaFormatada.split(":"), hora = _a.hora, minuto = _a.minuto;
        var minutos = (Math.floor(Number(hora)) * 60) + Math.floor(Number(minuto));
        return minutos;
    };
    DateHelperPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateHelper'
        })
    ], DateHelperPipe);
    return DateHelperPipe;
}());



/***/ }),

/***/ "./src/app/pipe/enum.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EnumPipe = (function () {
    function EnumPipe() {
    }
    EnumPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var enumMember in value) {
            keys.push({ key: enumMember, value: value[enumMember] });
        }
        return keys;
    };
    EnumPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'enum'
        })
    ], EnumPipe);
    return EnumPipe;
}());



/***/ }),

/***/ "./src/app/pipe/group-marcacao.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupMarcacaoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupMarcacaoPipe = (function () {
    function GroupMarcacaoPipe() {
    }
    GroupMarcacaoPipe.prototype.transform = function (collection, property) {
        if (!collection) {
            return null;
        }
        var groupedCollection = collection.reduce(function (previous, current) {
            if (!previous[current[property]]) {
                previous[current[property]] = [current];
            }
            else {
                previous[current[property]].push(current);
            }
            return previous;
        }, {});
        // this will return an array of objects, each object containing a group of objects
        var array = Object.keys(groupedCollection).map(function (key) { return ({ key: key, value: groupedCollection[key] }); });
        array.sort(function (a, b) {
            if (a.key > b.key)
                return 1;
            if (a.key < b.key)
                return -1;
            return 0;
        });
        // console.log(array);
        return array;
    };
    GroupMarcacaoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'groupMarcacao'
        })
    ], GroupMarcacaoPipe);
    return GroupMarcacaoPipe;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"privacy\">\r\n  <h1>Bem-vindo ao SRF</h1>\r\n  <br />\r\n  <p>Nosso objetivo &eacute; coletar registros de frequ&ecirc;ncia, independente de sua conex&atilde;o com internet. Armazena o hor&aacute;rio do registro de ponto, bem como sua latitude e longitude atual, mesmo sem internet. Quando conectado on internet, o aplicativo faz de maneira autom&aacute;tica a sincroniza&ccedil;&atilde;o com a base de dados online;</p>\r\n\r\n  <p>â— Nossa Pol&iacute;tica de Privacidade explica como n&oacute;s coletamos, usamos e protegemos as informa&ccedil;&otilde;es relacionadas ao Registro de Frequ&ecirc;ncia.</p>\r\n  <p>â— Ao usar o nosso aplicativo, voc&ecirc; entende e concorda que estamos oferecendo uma plataforma para voc&ecirc; registrar sua frequ&ecirc;ncia, incluindo sua geolocaliza&ccedil;&atilde;o. (\"Conte&uacute;do do Usu&aacute;rio\") no aplicativo e para compartilhar o Conte&uacute;do do Usu&aacute;rio com nossos parceiros. Isso significa que outros Usu&aacute;rios podem pesquisar, ver, usar ou compartilhar qualquer Conte&uacute;do do usu&aacute;rio do Servi&ccedil;o.</p>\r\n\r\n  <p>Nossa Pol&iacute;tica se aplica a todos os funcion&aacute;rios da FLEM e outros que acessam o Servi&ccedil;o (\"Parceiros\").</p>\r\n\r\n  <h3>1. INFORMA&Ccedil;&Otilde;ES QUE COLETAMOS</h3>\r\n\r\n  <p>N&oacute;s coletamos os seguintes tipos de informa&ccedil;&otilde;es. Informa&ccedil;&otilde;es que voc&ecirc; fornece para n&oacute;s diretamente:</p>\r\n  <p>â— Conte&uacute;do de Usu&aacute;rio (por exemplo geolocaliza&ccedil;&otilde;es e informa&ccedil;&atilde;o qualquer relacionada aos registro de frequ&ecirc;ncia).</p>\r\n  <p>â— Quando voc&ecirc; acessa o Servi&ccedil;o, n&oacute;s podemos usar cookies e tecnologias semelhantes como pixels, web beacons e armazenamento local para coletar informa&ccedil;&otilde;es sobre a forma como voc&ecirc; usa o SRF e fornecer recursos a voc&ecirc;.</p>\r\n\r\n  <p>Informa&ccedil;&otilde;es de arquivo de log:</p>\r\n\r\n  <p>â— As informa&ccedil;&otilde;es de arquivo de log s&atilde;o automaticamente fornecidas pelo seu navegador todas as vezes que fazemos uma solicita&ccedil;&atilde;o para acessar (ou seja, visitar) uma p&aacute;gina ou aplicativo da Web. Elas tamb&eacute;m podem ser fornecidas quando o conte&uacute;do da p&aacute;gina ou aplicativo da Web &eacute; baixado para seu navegador ou dispositivo.</p>\r\n  <p>â— Quando voc&ecirc; usa nosso Servi&ccedil;o, nossos servidores registram automaticamente determinadas informa&ccedil;&otilde;es do arquivo de log, incluindo sua solicita&ccedil;&atilde;o da Web, endere&ccedil;o IP (Protocolo de Internet), tipo de dispositivo, p&aacute;ginas e URLs de consulta / sa&iacute;da, n&uacute;mero de cliques e como voc&ecirc; interage com links no Servi&ccedil;o, nomes de dom&iacute;nio, p&aacute;ginas de destino, p&aacute;ginas visualizadas e outras informa&ccedil;&otilde;es como essas. N&oacute;s tamb&eacute;m podemos coletar informa&ccedil;&otilde;es semelhantes a partir de emails enviados para nossos Usu&aacute;rios que nos ajudam a rastrear quais emails s&atilde;o abertos e quais links s&atilde;o clicados pelos destinat&aacute;rios. As informa&ccedil;&otilde;es nos ajudam a ter um relat&oacute;rio mais preciso e aprimorar o Servi&ccedil;o. Identificadores de dispositivo:</p>\r\n  <p>â— Quando voc&ecirc; usa um dispositivo m&oacute;vel como um tablet ou telefone para acessar nosso Servi&ccedil;o, n&oacute;s podemos acessar, coletar, monitorar, armazenar em seu dispositivo e/ou armazenar remotamente um ou mais \"identificadores de dispositivo\". Os identificadores de dispositivo s&atilde;o pequenos arquivos de dados ou estruturas de dados semelhantes armazenadas em seu dispositivo, ou associadas a ele, que identificam o seu dispositivo m&oacute;vel de forma exclusiva. Um identificador de dispositivo pode ser composto por dados armazenados associados ao hardware do dispositivo, dados armazenados associados ao sistema operacional do dispositivo ou outros softwares ou dados enviados ao dispositivo pelo SRF.</p>\r\n  <p>â— Um identificador de dispositivo pode fornecer informa&ccedil;&otilde;es para n&oacute;s ou para um parceiro terceirizado sobre a forma como voc&ecirc; navega e usa o Servi&ccedil;o e pode nos ajudar, ou ajudar outros, a fornecer relat&oacute;rios ou conte&uacute;dos personalizados. Alguns recursos do Servi&ccedil;o podem n&atilde;o funcionar corretamente se o uso ou a disponibilidade desses identificadores de dispositivo estiver prejudicada ou desativada.</p>\r\n\r\n  <h2>Metadados:</h2>\r\n\r\n  <p>â— Os metadados s&atilde;o normalmente dados t&eacute;cnicos associados ao Conte&uacute;do do Usu&aacute;rio. Por exemplo, Metadados podem descrever como, quando e por quem uma parte de Conte&uacute;do do Usu&aacute;rio foi coletada e como este conte&uacute;do est&aacute; formatado.</p>\r\n\r\n  <p>â— Os usu&aacute;rios podem adicionar ou ter Metadados adicionados ao seu Conte&uacute;do do Usu&aacute;rio incluindo um evento (por exemplo, para registrar frequ&ecirc;ncia), marca&ccedil;&atilde;o geogr&aacute;fica (por exemplo, para marcar seu local), coment&aacute;rio ou outros dados. Isso pode tornar seu conte&uacute;do mais f&aacute;cil de ser pesquisado por outros e mais interativo.</p>\r\n\r\n  <h3>2. COMO N&Oacute;S USAMOS SUAS INFORMA&Ccedil;&Otilde;ES</h3>\r\n\r\n  <p>Al&eacute;m de alguns dos usos espec&iacute;ficos de informa&ccedil;&otilde;es que descrevemos nesta Pol&iacute;tica de Privacidade, n&oacute;s podemos usar as informa&ccedil;&otilde;es que recebemos para:</p>\r\n\r\n  <p>â— ajud&aacute;-lo a acessar suas informa&ccedil;&otilde;es de forma eficiente ap&oacute;s seu login</p>\r\n\r\n  <p>â— lembrar suas informa&ccedil;&otilde;es para que voc&ecirc; n&atilde;o tenha que reinseri-las durante sua visita ou na pr&oacute;xima vez que acessar o Servi&ccedil;o;</p>\r\n\r\n  <p>â— fornecer informa&ccedil;&otilde;es e conte&uacute;do personalizados para voc&ecirc; e outros, o que pode incluir an&uacute;ncios online ou outras formas de marketing</p>\r\n\r\n  <p>â— fornecer, aprimorar, testar e monitorar a efici&ecirc;ncia de nosso Servi&ccedil;o</p>\r\n\r\n  <p>â— desenvolver e testar novos produtos e recursos</p>\r\n\r\n  <p>â— monitorar m&eacute;tricas como o n&uacute;mero total de visitantes, tr&aacute;fego e padr&otilde;es demogr&aacute;ficos</p>\r\n\r\n  <p>â— diagnosticar ou corrigir problemas de tecnologia</p>\r\n\r\n  <p>â— atualizar automaticamente o aplicativo do SRF no seu dispositivo</p>\r\n\r\n  <h3>3. COMPARTILHAMENTO DE SUAS INFORMA&Ccedil;&Otilde;ES</h3>\r\n\r\n  <p>N&oacute;s podemos compartilhar suas informa&ccedil;&otilde;es com nossos parceiros, sempre que solicitado ou necess&aacute;rio, com ou sem a sua autoriza&ccedil;&atilde;o.</p>\r\n\r\n  <p>Partes com as quais podemos compartilhar suas informa&ccedil;&otilde;es:</p>\r\n\r\n  <p>â— N&oacute;s podemos compartilhar o Conte&uacute;do do Usu&aacute;rio e suas informa&ccedil;&otilde;es (incluindo, mas n&atilde;o restrito a, informa&ccedil;&otilde;es de cookies, arquivos de log, identificadores de dispositivo, dados de localiza&ccedil;&atilde;o e dados de uso) com parcerios que fa&ccedil;am parte legalmente do mesmo grupo de parceiros do qual o SRF &eacute; parte ou que se tornem parte deste grupo (\"Parceiros\"). Os Parceiros podem usar essas informa&ccedil;&otilde;es para ajudar a fornecer, entender e aprimorar o Servi&ccedil;o (incluindo o fornecimento de an&aacute;lises) e os pr&oacute;prios servi&ccedil;os dos Parceiros (incluindo o fornecimento a voc&ecirc; de experi&ecirc;ncias melhores e mais relevantes).</p>\r\n\r\n  <p>â— N&oacute;s tamb&eacute;m podemos compartilhar suas informa&ccedil;&otilde;es, assim como informa&ccedil;&otilde;es de ferramentas como cookies, arquivos de log e identificadores de dispositivo e dados de localiza&ccedil;&atilde;o, com organiza&ccedil;&otilde;es de terceiros que nos ajudam a fornecer o Servi&ccedil;o a voc&ecirc; (\"Provedores de Servi&ccedil;o\"). Nossos Provedores de Servi&ccedil;o receber&atilde;o acesso &agrave;s suas informa&ccedil;&otilde;es conforme razoavelmente necess&aacute;rio para fornecer o Servi&ccedil;o mediante termos de confidencialidade aceit&aacute;veis.</p>\r\n\r\n  <p>â— N&oacute;s tamb&eacute;m podemos compartilhar determinadas informa&ccedil;&otilde;es como dados de cookies com parceiros de propaganda terceirizados. Essas informa&ccedil;&otilde;es permitem que redes de an&uacute;ncio terceirizadas, entre outras coisas, forne&ccedil;am propaganda direcionada que elas acreditam que seja de maior interesse para voc&ecirc;. O que acontece no caso de uma altera&ccedil;&atilde;o de controle:</p>\r\n\r\n  <p>â— Se n&oacute;s vendermos ou transferirmos parte ou todo o SRF ou nossos ativos para outra organiza&ccedil;&atilde;o (por exemplo, durante uma transa&ccedil;&atilde;o de fus&atilde;o, aquisi&ccedil;&atilde;o, fal&ecirc;ncia, dissolu&ccedil;&atilde;o, liquida&ccedil;&atilde;o), suas informa&ccedil;&otilde;es pessoais, como Conte&uacute;do do Usu&aacute;rio e qualquer outra informa&ccedil;&atilde;o coletada atrav&eacute;s do Servi&ccedil;o pode estar entre os itens vendidos ou transferidos. O SRF ser&aacute; o propriet&aacute;rio do Conte&uacute;do do Usu&aacute;rio. O comprador ou cession&aacute;rio ter&aacute; que respeitar os compromissos que fizemos nesta Pol&iacute;tica de Privacidade. Atendendo a solicita&ccedil;&otilde;es judiciais e evitando preju&iacute;zos:</p>\r\n\r\n  <p>â— N&oacute;s podemos acessar, reter e compartilhar suas informa&ccedil;&otilde;es em resposta a uma solicita&ccedil;&atilde;o judicial (como um mandado de busca, ordem judicial ou intima&ccedil;&atilde;o) se acreditarmos em boa-f&eacute; que a lei nos obriga a fazer isso. Isso pode incluir a resposta a solicita&ccedil;&otilde;es judiciais de jurisdi&ccedil;&otilde;es fora do Brasil quando acreditarmos de boa-f&eacute; que a resposta &eacute; exigida por lei na jurisdi&ccedil;&atilde;o em quest&atilde;o, diz respeito aos usu&aacute;rios na jurisdi&ccedil;&atilde;o em quest&atilde;o e est&aacute; em conformidade com padr&otilde;es reconhecidos internacionalmente. Tamb&eacute;m podemos acessar, reter e compartilhar informa&ccedil;&otilde;es quando acreditarmos em boa f&eacute; que isso seja necess&aacute;rio para: detectar, impedir e resolver fraudes ou outras atividades ilegais; proteger a n&oacute;s mesmos, nossos Servi&ccedil;os, voc&ecirc; e outras pessoas, inclusive como parte das investiga&ccedil;&otilde;es; impedir a morte ou les&otilde;es corporais iminentes. As informa&ccedil;&otilde;es que recebemos sobre voc&ecirc; podem ser acessadas, processadas e retidas por um per&iacute;odo prolongado quando estiverem relacionadas a uma solicita&ccedil;&atilde;o ou obriga&ccedil;&atilde;o jur&iacute;dica, investiga&ccedil;&atilde;o governamental ou investiga&ccedil;&otilde;es relacionadas a poss&iacute;veis viola&ccedil;&otilde;es de nossos termos ou pol&iacute;ticas, ou, ent&atilde;o, para impedir preju&iacute;zos.</p>\r\n\r\n  <h1>Armazenamento e processamento:</h1>\r\n\r\n  <h3>4. COMO N&Oacute;S ARMAZENAMOS SUAS INFORMA&Ccedil;&Otilde;ES</h3>\r\n\r\n  <p>â— As suas informa&ccedil;&otilde;es coletadas atrav&eacute;s do Servi&ccedil;o podem ser armazenadas e processadas no Brasil ou em qualquer outro pa&iacute;s em que o SRF, seus Parceiros Afiliadas ou Provedores de Servi&ccedil;o mantenham instala&ccedil;&otilde;es.</p>\r\n\r\n  <p>â— O SRF, seus Parceiros ou Provedores de Servi&ccedil;o podem transferir informa&ccedil;&otilde;es que coletamos sobre voc&ecirc;, incluindo informa&ccedil;&otilde;es pessoais, atrav&eacute;s de fronteiras e do seu pa&iacute;s ou jurisdi&ccedil;&atilde;o para outros pa&iacute;ses ou jurisdi&ccedil;&otilde;es ao redor do mundo. Se voc&ecirc; se encontra na Uni&atilde;o Europeia ou em outras regi&otilde;es com leis que regem a coleta e uso de dados que possam ser diferentes da lei do Brasil, observe que n&oacute;s podemos transferir informa&ccedil;&otilde;es, incluindo informa&ccedil;&otilde;es pessoais, para um pa&iacute;s e jurisdi&ccedil;&atilde;o que n&atilde;o tem as mesmas leis de prote&ccedil;&atilde;o de dados que a sua jurisdi&ccedil;&atilde;o.</p>\r\n\r\n  <p>â— Ao se registrar no Servi&ccedil;o e utiliz&aacute;-lo, voc&ecirc; concorda com a transfer&ecirc;ncia de informa&ccedil;&otilde;es para o Brasil ou para qualquer pa&iacute;s em que o SRF, seus Parceiros ou Provedores de Servi&ccedil;o mantenham instala&ccedil;&otilde;es e com o uso e divulga&ccedil;&atilde;o de informa&ccedil;&otilde;es sobre voc&ecirc; conforme descrito nesta Pol&iacute;tica de Privacidade.</p>\r\n\r\n  <p>â— N&oacute;s usamos meios de prote&ccedil;&atilde;o comercialmente aceit&aacute;veis para ajudar a manter protegidas as informa&ccedil;&otilde;es coletadas atrav&eacute;s do Servi&ccedil;o e tomamos medidas razo&aacute;veis (como a solicita&ccedil;&atilde;o de uma senha exclusiva) para verificar sua identidade antes de conceder a voc&ecirc; acesso &agrave; sua conta. Entretanto, o SRF n&atilde;o pode garantir a seguran&ccedil;a de nenhuma informa&ccedil;&atilde;o transmitida por voc&ecirc; para o SRF ou garantir que esta informa&ccedil;&atilde;o no Servi&ccedil;o n&atilde;o possa ser acessada, divulgada, alterada ou destru&iacute;da.</p>\r\n\r\n  <p>â— Solicitamos que voc&ecirc; fa&ccedil;a sua parte para nos ajudar. Voc&ecirc; &eacute; respons&aacute;vel por manter sigilo sobre sua senha exclusiva e as informa&ccedil;&otilde;es providas pelos nossos sistemas, inclusive pelo aplicativo, e por controlar o acesso a emails entre voc&ecirc; e o SRF, o tempo todo. N&oacute;s n&atilde;o somos respons&aacute;veis pela funcionalidade, privacidade ou medidas de seguran&ccedil;a de qualquer outra organiza&ccedil;&atilde;o.</p>\r\n\r\n  <h3>5. SUAS ESCOLHAS SOBRE SUAS INFORMA&Ccedil;&Otilde;ES</h3>\r\n\r\n  <p>Suas informa&ccedil;&otilde;es de conta e configura&ccedil;&otilde;es de perfil/privacidade:</p>\r\n\r\n  <p>â— Atualize suas informa&ccedil;&otilde;es sempre que necess&aacute;rio atrav&eacute;s da Central de Relacionamento 71 3103-7587.</p>\r\n\r\n  <p>â— Voc&ecirc; n&atilde;o pode recusar comunica&ccedil;&otilde;es relacionadas ao Servi&ccedil;o (por exemplo, verifica&ccedil;&atilde;o de conta, confirma&ccedil;&otilde;es e lembretes, altera&ccedil;&otilde;es/atualiza&ccedil;&otilde;es em recursos do Servi&ccedil;o, avisos t&eacute;cnicos e de seguran&ccedil;a e qualquer outro assunto julgado relevante pelo SRF).</p>\r\n\r\n  <p>Por quanto tempo mantemos seu Conte&uacute;do do Usu&aacute;rio:</p>\r\n\r\n  <p>â— Ap&oacute;s o encerramento do seu contrato, o SRF, seus Parceiros ou seus Provedores de Servi&ccedil;o podem reter informa&ccedil;&otilde;es (incluindo suas informa&ccedil;&otilde;es de perfil) e Conte&uacute;do do Usu&aacute;rio por um tempo indertemidado para fins de backup, arquivamento e/ou auditoria.</p>\r\n\r\n\r\n  <h3>6. COMO ENTRAR EM CONTATO CONOSCO</h3>\r\n\r\n  <p>Se tiver quaisquer d&uacute;vidas sobre esta Pol&iacute;tica de Privacidade ou sobre o Servi&ccedil;o, envie um e-mail para <span style=\"color: #0000ff;\"><u><a href=\"mailto:helpdesk@flem.org.br\">helpdesk@flem.org.br</a></u></span> ou atrav&eacute;s da Central de Relacionamento &ndash; 71 3103-7587</p>\r\n\r\n  <h3>7. ALTERA&Ccedil;&Otilde;ES EM NOSSA POL&Iacute;TICA DE PRIVACIDADE</h3>\r\n\r\n  <p>O SRF pode modificar ou atualizar esta Pol&iacute;tica de Privacidade de tempos em tempos, portanto verifique-a periodicamente. N&oacute;s podemos fornecer a voc&ecirc; formas adicionais de aviso sobre modifica&ccedil;&otilde;es ou atualiza&ccedil;&otilde;es conforme apropriado mediante as circunst&acirc;ncias.</p>\r\n  <p>A continua&ccedil;&atilde;o do seu uso do SRF ou do Servi&ccedil;o ap&oacute;s qualquer modifica&ccedil;&atilde;o desta Pol&iacute;tica de Privacidade constituir&aacute; sua aceita&ccedil;&atilde;o das modifica&ccedil;&otilde;es em quest&atilde;o.</p>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.scss":
/***/ (function(module, exports) {

module.exports = ".privacy {\n  margin: 20px 20px 20px 20px;\n  background-color: #FFF;\n  padding: 20px 20px 20px 20px; }\n"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("./src/app/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/registrar-ponto/registrar-ponto.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarPontoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_dialog_confirmar_email_dialog_confirmar_email_module__ = __webpack_require__("./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registrar_ponto_registrar_ponto_component__ = __webpack_require__("./src/app/registrar-ponto/registrar-ponto/registrar-ponto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_comunicacao_service__ = __webpack_require__("./src/app/service/comunicacao.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RegistrarPontoModule = (function () {
    function RegistrarPontoModule() {
    }
    RegistrarPontoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_0__dialog_dialog_confirmar_email_dialog_confirmar_email_module__["a" /* DialogConfirmarEmailModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__registrar_ponto_registrar_ponto_component__["a" /* RegistrarPontoComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__service_frequencia_service__["a" /* FrequenciaService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_8__service_comunicacao_service__["a" /* ComunicacaoService */]
            ],
        })
    ], RegistrarPontoModule);
    return RegistrarPontoModule;
}());



/***/ }),

/***/ "./src/app/registrar-ponto/registrar-ponto/registrar-ponto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" align=\"center\">\r\n    <div class=\"container-fluid col-lg-6 col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header card-header-danger\">\r\n                    <h4 class=\"card-title\">Registrar FrequÃªncia</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form [formGroup]=\"newForm\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <h2>{{ data | date:\"dd/MM/yyyy HH:mm:ss\"}} </h2>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 text-left\">\r\n                                <label for=\"filter\">UsuÃ¡rio:</label>\r\n                                <input type=\"text\" formControlName=\"nome\" class=\"form-control\" name=\"nome\" id=\"nome\">\r\n                                <mat-error *ngIf=\"!newForm.controls.nome.valid\">Campo ObrigatÃ³rio</mat-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 text-left\">\r\n                                <label for=\"filter\">Senha:</label>\r\n                                <input type=\"password\" formControlName=\"senha\" class=\"form-control\" name=\"senha\"\r\n                                    id=\"senha\">\r\n                                <mat-error *ngIf=\"!newForm.controls.senha.valid\">Campo ObrigatÃ³rio</mat-error>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <button [hidden]=\"loading\" mat-raised-button (click)=\"save()\"\r\n                                class=\"btn btn-info pull-left {{ isMobileMenu() }}\" style=\"width: 100%\">\r\n                                <i class=\"material-icons\">timer</i> Registrar</button>\r\n                            <div class=\"clearfix\"></div>\r\n                            <div [hidden]=\"!loading\" align=\"center\" style=\"width: 100%\">\r\n                                <h4>Registrando...</h4>\r\n                                <mat-spinner [diameter]=\"40\"></mat-spinner>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n\r\n                            <div style=\"width: 100%\">\r\n                                <a href=\"http://www.flem.org.br/aviso-e-recibo-de-ferias-poderao-ser-emitidos-via-srf/\"\r\n                                    target=\"_blank\">\r\n                                    <img [src]=\"image\" style=\"width: 100%\">\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/registrar-ponto/registrar-ponto/registrar-ponto.component.scss":
/***/ (function(module, exports) {

module.exports = ".bt-mobile {\n  margin-left: 20px !important;\n  margin-right: 20px !important; }\n"

/***/ }),

/***/ "./src/app/registrar-ponto/registrar-ponto/registrar-ponto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarPontoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_frequencia_service__ = __webpack_require__("./src/app/service/frequencia.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_dialog_dialog_confirmar_email_dialog_confirmar_email_component__ = __webpack_require__("./src/app/dialog/dialog-confirmar-email/dialog-confirmar-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_comunicacao_service__ = __webpack_require__("./src/app/service/comunicacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegistrarPontoComponent = (function () {
    function RegistrarPontoComponent(frequenciaService, datePipe, router, dialog, ascom, sanitizer) {
        this.frequenciaService = frequenciaService;
        this.datePipe = datePipe;
        this.router = router;
        this.dialog = dialog;
        this.ascom = ascom;
        this.sanitizer = sanitizer;
        this.loading = false;
        this.buildForm();
    }
    RegistrarPontoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.frequenciaService.time().subscribe(function (value) {
            var year = value[0];
            var month = value[1];
            var day = value[2];
            var hour = value[3];
            var minutes = value[4];
            var seconds = value[5];
            _this.data = new Date(year, month - 1, day, hour, minutes, seconds);
            _this.getRelogio();
        });
        this.getImageAscom();
        this.getLocation();
    };
    RegistrarPontoComponent.prototype.getRelogio = function () {
        var _this = this;
        setInterval(function () {
            _this.data = new Date(_this.data.getTime() + 1000);
        }, 1000);
    };
    RegistrarPontoComponent.prototype.save = function () {
        var _this = this;
        if (this.newForm.invalid) {
            __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("Os campos UsuÃ¡rio e Senha sÃ£o obrigatÃ³rios", __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Error);
        }
        else {
            this.loading = true;
            var dataFormatada = this.transformDate(this.data);
            this.frequenciaService.registrarPonto(this.newForm.value.nome, this.newForm.value.senha, dataFormatada, this.lat, this.lng)
                .subscribe(function (response) {
                __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification('FrequÃªncia Registrada com Sucesso', __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Success);
                __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(response.value, __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Success);
                _this.buildForm();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.error[0] != null && error.error[0].value == "NaoValidado") {
                    _this.openDialogConfirmarEmail(error.error[1].value);
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_4__helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification(error.error.message, __WEBPACK_IMPORTED_MODULE_5__model_alert_type__["a" /* AlertType */].Error);
                }
            });
        }
    };
    RegistrarPontoComponent.prototype.buildForm = function () {
        this.newForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            'nome': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            'senha': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
    };
    RegistrarPontoComponent.prototype.transformDate = function (date) {
        return this.datePipe.transform(date, 'dd/MM/yyyy HH:mm');
    };
    RegistrarPontoComponent.prototype.openDialogConfirmarEmail = function (mensagem) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8_app_dialog_dialog_confirmar_email_dialog_confirmar_email_component__["a" /* DialogConfirmarEmailComponent */], {
            width: '600px',
            data: {
                mensagem: mensagem
            }
        });
    };
    RegistrarPontoComponent.prototype.getImageAscom = function () {
        var _this = this;
        this.ascom.image().subscribe(function (img) {
            _this.createImageFromBlob(img);
        });
    };
    RegistrarPontoComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.image = _this.sanitizer.bypassSecurityTrustResourceUrl(encodeURI(reader.result));
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    RegistrarPontoComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return "";
        }
        return "bt-mobile";
    };
    RegistrarPontoComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                if (position) {
                    _this.lat = position.coords.latitude;
                    _this.lng = position.coords.longitude;
                    console.log(_this.lat);
                    console.log(_this.lat);
                }
            }, function (error) { return console.log(error); });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    RegistrarPontoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registrar-ponto',
            template: __webpack_require__("./src/app/registrar-ponto/registrar-ponto/registrar-ponto.component.html"),
            styles: [__webpack_require__("./src/app/registrar-ponto/registrar-ponto/registrar-ponto.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_frequencia_service__["a" /* FrequenciaService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_9__service_comunicacao_service__["a" /* ComunicacaoService */], __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["DomSanitizer"]])
    ], RegistrarPontoComponent);
    return RegistrarPontoComponent;
}());



/***/ }),

/***/ "./src/app/service/abono.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbonoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AbonoService = (function () {
    function AbonoService(http) {
        this.http = http;
        this.PATH = "abonos/";
    }
    AbonoService.prototype.gerarAbonosFromAtestado = function (idAtestado, abonos) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].baseUrl + this.PATH + "atestado/" + idAtestado, abonos)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    AbonoService.prototype.approveOrDisapprove = function (pathLocal, obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].baseUrl + this.PATH + pathLocal, obj)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    AbonoService.prototype.approveOrDisapproveList = function (abonos) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].baseUrl + this.PATH + "aprovarAbonoEmLote", abonos)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    AbonoService.prototype.getHistory = function (idDia) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].baseUrl + this.PATH + "historico/" + idDia)
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    AbonoService.prototype.aprovarAtestadoMedicoOrOutrasFaltas = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].baseUrl + this.PATH + "aprovarAtestadoMedicoOrOutrasFaltas", obj)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    AbonoService.prototype.reprovarAtestadoMedicoOrOutrasFaltas = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].baseUrl + this.PATH + "reprovarAtestadoMedicoOrOutrasFaltas", obj)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    AbonoService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(error || "Internal server error");
    };
    AbonoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], AbonoService);
    return AbonoService;
}());



/***/ }),

/***/ "https://raw.githubusercontent.com/JLuucas/TNC/master/autenticacao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutenticacaoService = (function () {
    function AutenticacaoService(http, userData) {
        this.http = http;
        this.userData = userData;
    }
    AutenticacaoService.prototype.login = function (user) {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
                'Authorization': 'none',
            })
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + 'auth/login', user, httpOptions).
            map(function (user) {
            if (user) {
                _this.userData.registrar(JSON.stringify(user));
            }
        });
    };
    AutenticacaoService.prototype.logout = function () {
        this.userData.logout();
    };
    AutenticacaoService.prototype.registrar = function (user) {
        this.userData.registrar(JSON.stringify(user));
    };
    AutenticacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__user_data_service__["a" /* UserDataService */]])
    ], AutenticacaoService);
    return AutenticacaoService;
}());



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authorization_service__ = __webpack_require__("./src/app/service/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_helper_helper_frequencia__ = __webpack_require__("./src/app/helper/helper-frequencia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_model_alert_type__ = __webpack_require__("./src/app/model/alert-type.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuardService = (function () {
    function AuthGuardService(auth, router, authorizationService) {
        this.auth = auth;
        this.router = router;
        this.authorizationService = authorizationService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var expired = this.auth.hasExpired();
        if (expired) {
            __WEBPACK_IMPORTED_MODULE_4_app_helper_helper_frequencia__["a" /* HelperFrequencia */].showNotification("SessÃ£o Expirada!", __WEBPACK_IMPORTED_MODULE_5_app_model_alert_type__["a" /* AlertType */].Warning);
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        if (route.data) {
            var role = route.data['role'];
            if (!this.hasRequiredPermission(role)) {
                this.router.navigate(['/access']);
                return false;
            }
        }
        return true;
    };
    AuthGuardService.prototype.hasRequiredPermission = function (permissao) {
        return this.authorizationService.hasPermission(permissao);
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_data_service__["a" /* UserDataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_3__authorization_service__["a" /* AuthorizationService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/authorization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthorizationService = (function () {
    function AuthorizationService(userData) {
        this.userData = userData;
    }
    AuthorizationService.prototype.hasPermission = function (permissao) {
        this.permissions = this.userData.permissions();
        if (this.permissions && this.permissions.find(function (permission) {
            return permission === permissao;
        })) {
            return true;
        }
        return false;
    };
    AuthorizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_data_service__["a" /* UserDataService */]])
    ], AuthorizationService);
    return AuthorizationService;
}());



/***/ }),

/***/ "./src/app/service/banco-de-horas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancoDeHorasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BancoDeHorasService = (function () {
    function BancoDeHorasService(http) {
        this.http = http;
        this.PATH = "bancodehoras/";
    }
    BancoDeHorasService.prototype.projetos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/bancodehoras")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.projetosInternos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projetosinternos")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.projetosExternos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projetosexternos")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.funcionariosPorProjeto = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/bancodehoras/" + id + "/funcionarios")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.funcionariosPorProjetos = function (ids) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/bancodehoras/" + ids + "/funcionarios")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.downloadPDF = function (ids) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/printPDF/" + ids, { responseType: "blob" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.downloadRelatorioBancoHorasindividual = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "pdfIndividual", obj, { responseType: "blob" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.obterBancoHoras = function (ids) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "obterBancoHoras", ids)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype.downloadRelatorioBancoHorasindividualMensal = function (obj) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "pdfIndividualMensal", obj, { responseType: "blob" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    BancoDeHorasService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || "Internal server error");
    };
    BancoDeHorasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], BancoDeHorasService);
    return BancoDeHorasService;
}());



/***/ }),

/***/ "./src/app/service/comunicacao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunicacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComunicacaoService = (function () {
    function ComunicacaoService(http) {
        this.http = http;
        this.PATH = "comunicacao";
    }
    ComunicacaoService.prototype.image = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'none'
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH, { headers: headers, responseType: 'blob' })
            .map(function (res) { return res; });
    };
    ComunicacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ComunicacaoService);
    return ComunicacaoService;
}());



/***/ }),

/***/ "./src/app/service/confirm-email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmEmailService = (function () {
    function ConfirmEmailService(http) {
        this.http = http;
        this.path = "funcionariolocal/";
    }
    ConfirmEmailService.prototype.confirmarEmail = function (token) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.path + "confirmaremail/" + token, {});
    };
    ConfirmEmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ConfirmEmailService);
    return ConfirmEmailService;
}());



/***/ }),

/***/ "./src/app/service/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.PATH = "dashboard";
    }
    DashboardService.prototype.projetos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projetos")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    DashboardService.prototype.funcionariosPorProjeto = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projeto/" + id + "/funcionarios")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    DashboardService.prototype.funcionariosPorProjetoTrabalhando = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projeto/" + id + "/trabalhando")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    DashboardService.prototype.funcionariosPorProjetoNaoTrabalhando = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projeto/" + id + "/naotrabalhando")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    DashboardService.prototype.funcionariosPorProjetoInativos = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projeto/" + id + "/inativos")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    DashboardService.prototype.funcionariosSemRegistrosPorProjeto = function (id, matriculas) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/projeto/" + id + "/semregistros", matriculas)
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    DashboardService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || "Internal server error");
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/service/dialog-historico-administrar-ponto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogHistoricoAdministrarPontoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogHistoricoAdministrarPontoService = (function () {
    function DialogHistoricoAdministrarPontoService() {
    }
    DialogHistoricoAdministrarPontoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DialogHistoricoAdministrarPontoService);
    return DialogHistoricoAdministrarPontoService;
}());



/***/ }),

/***/ "./src/app/service/emitir-evento.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmitirEventoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmitirEventoService = (function () {
    function EmitirEventoService() {
        this.mensagem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EmitirEventoService.prototype.emitir = function (type, data) {
        this.mensagem.emit({ type: type, data: data });
    };
    EmitirEventoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmitirEventoService);
    return EmitirEventoService;
}());



/***/ }),

/***/ "./src/app/service/excel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__("./node_modules/xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var date = new Date();
        var dateDay = date.toLocaleDateString() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        var ws = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet([{ "Data de GeraÃ§Ã£o": "Data e hora de GeraÃ§Ã£o: " + dateDay }], { header: ["Data de GeraÃ§Ã£o"], skipHeader: true });
        var worksheet = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].sheet_add_json(ws, json, { skipHeader: false, origin: "A3" });
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/service/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileService = (function () {
    function FileService(http) {
        this.http = http;
        this.PATH = 'atestados/';
    }
    FileService.prototype.uploadAtestado = function (file, dataInicio, dataFim, matricula, atestado) {
        var formdata = new FormData();
        if (!file) {
            file = new File([], "");
        }
        formdata.append('file', file);
        formdata.append('dataInicio', dataInicio);
        formdata.append('dataFim', dataFim);
        formdata.append('matricula', matricula);
        formdata.append('atestado', JSON.stringify(atestado));
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "salva";
        return this._upload(url, formdata);
    };
    FileService.prototype.processar = function (atestado) {
        // console.log('teste');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "simula", atestado)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FileService.prototype.uploadFrequenciaAssinada = function (file, id) {
        var formdata = new FormData();
        formdata.append('file', file);
        formdata.append('id', id);
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + "frequencias/" + id + "/upload";
        return this._upload(url, formdata);
    };
    FileService.prototype.downloadFileAtestado = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + "atestados/" + id + "/download";
        return this._download(url);
    };
    FileService.prototype.downloadFileFrequencia = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + "frequencias/" + id + "/download";
        return this._download(url);
    };
    FileService.prototype.frequenciaJoinAtestadoJoinFerias = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + "frequencias/" + id + "/joinDownload";
        return this._download(url);
    };
    // downloadFileExportacao(id) {
    //   const url = environment.baseUrl + "exportacaodominio/download/" + id;
    //   return this._download(url);
    // }
    FileService.prototype.downloadFileExportacao = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + "exportacaodominio/download/exportacao/" + id;
        return this._download(url);
    };
    FileService.prototype.downloadFileDetalhamento = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + "exportacaodominio/download/detalhamento/" + id;
        return this._download(url);
    };
    FileService.prototype._download = function (url, type) {
        var tipoRetorno = type ? type : "blob";
        return this.http.get(url, { responseType: tipoRetorno })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FileService.prototype._upload = function (url, formdata) {
        return this.http.post(url, formdata)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FileService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error || "Internal server error");
    };
    FileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/service/frequencia.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrequenciaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FrequenciaService = (function () {
    function FrequenciaService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.PATH = "frequencias/";
    }
    FrequenciaService.prototype.time = function () {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpHeaders */]({
                'Authorization': 'none',
            })
        };
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "time", httpOptions);
    };
    FrequenciaService.prototype.get = function (matricula, ano, mes) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + matricula + "/" + ano + "/" + mes);
    };
    FrequenciaService.prototype.save = function (frequencias) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH, frequencias);
    };
    FrequenciaService.prototype.update = function (frequencias) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH, frequencias);
    };
    FrequenciaService.prototype.registrarPontoEmAtraso = function (frequencias, matricula) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "emAtraso/" + matricula, frequencias)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.gerar = function (matricula, ano, mes) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH, { matricula: matricula, ano: ano, mes: mes })
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.movimentos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "movimentos")
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.downloadPDF = function (idFrequencia) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "printPDF/" + idFrequencia, { responseType: "blob" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.downloadAnexo = function (idFrequencia) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "file/" + idFrequencia, { responseType: "blob" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.downloadAnexoAbono = function (idAnexo) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + "atestados/file/" + idAnexo, { responseType: "blob" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.registrarPonto = function (nome, senha, horario, lat, lng) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["e" /* HttpHeaders */]({
                'Authorization': 'none',
            })
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH, { username: nome, senha: senha, dataMarcacao: horario, latitude: lat, longitude: lng }, httpOptions)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.getFrequencias = function (matricula) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "matricula/" + matricula)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.getDiasByFrequencia = function (frequencia) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + frequencia + "/dias")
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.getFileName = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "fileName/" + id, { responseType: 'text' })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.validarFrequencia = function (id) {
        console.log(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "validar", id);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "validar", id)
            .map(function (response) { return response; });
    };
    FrequenciaService.prototype.getFrequenciasById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + id)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.disponiblizarFolha = function (id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "disponibilizar", id)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.obterListaSituacaoEnvioFrequencia = function (mesAno, listaProjeto) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "mesAno/" + mesAno, listaProjeto)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.obterListaDeQuemNuncaAcessouSistema = function (mesAno, listaProjeto) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "nuncaAcessou/" + mesAno, listaProjeto)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.getSituacaoFrequencia = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "statusFrquencia")
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.getFrequenciasParaValidacao = function (filtro) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "obterFrequencias", filtro)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.downloadFilesZip = function (mesAno) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + mesAno + "/filesZip", { responseType: "blob" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.reprovarFrequencia = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "reprovarFrequencia", obj)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.reabrirFrequencia = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "reabrirFrequencia", obj)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.getHistory = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + id + "/historico")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.salvarObservacaoPontoFocal = function (obj) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "observacaoPontoFocal", obj)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.getObservacaoNaoAssinada = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + id + "/observacaoNaoAssinatura")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.obterDemandante = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + id + "/obterDemandante")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.obterMuniciopio = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "obterMuniciopio")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.downloadFrequenciasZip = function (matricula) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "downloadZip", matricula, { responseType: "arraybuffer" })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype.clearFilesZip = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "clearFilesZip")
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FrequenciaService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error || "Internal server error");
    };
    FrequenciaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__user_data_service__["a" /* UserDataService */]])
    ], FrequenciaService);
    return FrequenciaService;
}());



/***/ }),

/***/ "./src/app/service/funcionario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncionarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FuncionarioService = (function () {
    function FuncionarioService(http) {
        this.http = http;
        this.PATH = "funcionarios/";
    }
    FuncionarioService.prototype.getBy = function (value, path) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + path + "/" + value)
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    FuncionarioService.prototype.getSituacaoFuncionario = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + "situacaoFuncionario")
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FuncionarioService.prototype._errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || "Internal server error");
    };
    FuncionarioService.prototype.getDadosRH = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].baseUrl + this.PATH + id + '/dadosrh')
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    FuncionarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], FuncionarioService);
    return FuncionarioService;
}());



/***/ }),

/***/ "./src/app/service/funcionariolocal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncionariolocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuncionariolocalService = (function () {
    function FuncionariolocalService(_http) {
        this._http = _http;
        this.PATH = "funcionariolocal/";
    }
    FuncionariolocalService.prototype.all = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "funcionarios")
            .map(function (res) { return res; });
    };
    FuncionariolocalService.prototype.getSituacaoFuncionario = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "situacaoFuncionario")
            .map(function (res) { return res; });
    };
    FuncionariolocalService.prototype.enable = function (matricula) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + matricula + "/enabled", null)
            .map(function (res) { return res; });
    };
    FuncionariolocalService.prototype.getFuncionarioDTO = function (matricula) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + matricula + "/funcionario")
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FuncionariolocalService.prototype.atualizarConfiguracao = function (obj) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "configurar", obj)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    FuncionariolocalService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error || "Internal server error");
    };
    FuncionariolocalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], FuncionariolocalService);
    return FuncionariolocalService;
}());



/***/ }),

/***/ "./src/app/service/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data_service__ = __webpack_require__("./src/app/service/user-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterceptorService = (function () {
    function InterceptorService(userDataService) {
        this.userDataService = userDataService;
    }
    InterceptorService.prototype.intercept = function (request, next) {
        return this.handleAccess(request, next);
    };
    InterceptorService.prototype.handleAccess = function (request, next) {
        var _this = this;
        var idUser = this.userDataService.idUser();
        var lotacaoDominio = this.userDataService.lotacaoDominio();
        var changedRequest = request;
        var headerSettings = {};
        for (var _i = 0, _a = request.headers.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            headerSettings[key] = request.headers.getAll(key);
        }
        if (idUser) {
            headerSettings['idUser'] = idUser + "";
        }
        if (lotacaoDominio) {
            headerSettings['lotacaoDominio'] = lotacaoDominio + "";
        }
        var newHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */](headerSettings);
        changedRequest = request.clone({ headers: newHeader });
        return next.handle(changedRequest).map(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                event = event.clone({ body: event.body });
                if (event.status == 200) {
                    var timeSession = _this.userDataService.getTimeSession();
                    if (timeSession) {
                        _this.userDataService.setTime(timeSession);
                    }
                }
            }
            return event;
        });
    };
    InterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_data_service__["a" /* UserDataService */]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/service/marcacoes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarcacoesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarcacoesService = (function () {
    function MarcacoesService(http) {
        this.http = http;
        this.PATH = "marcacoes/";
    }
    MarcacoesService.prototype.saveMarcacao = function (marcacoes) {
        // console.log(environment.baseUrl + this.PATH + "/salvarMarcacoes", marcacoes);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "/salvarMarcacoes", marcacoes)
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    MarcacoesService.prototype.removerMarcacao = function (id, observacao) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "delete", { id: id, observacao: observacao })
            .map(function (response) { return response; })
            .catch(this._errorHandler);
    };
    MarcacoesService.prototype.getHistory = function (idDia) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + "historico/" + idDia)
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    MarcacoesService.prototype.approveOrDisapprove = function (marcacoes, pathLocal) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + pathLocal, marcacoes)
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    MarcacoesService.prototype.verificarInconsistencia = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].baseUrl + this.PATH + id + "/inconsistencia")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    MarcacoesService.prototype._errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error || "Internal server error");
    };
    MarcacoesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], MarcacoesService);
    return MarcacoesService;
}());



/***/ }),

/***/ "./src/app/service/reprovacoes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReprovacoesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReprovacoesService = (function () {
    function ReprovacoesService(http) {
        this.http = http;
        this.PATH = "tiposReprovacao/";
    }
    ReprovacoesService.prototype.getListaReprovacoes = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1_environments_environment__["a" /* environment */].baseUrl + this.PATH + "listaReprovacoes")
            .map(function (res) { return res; })
            .catch(this._errorHandler);
    };
    ReprovacoesService.prototype._errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(error || "Internal server error");
    };
    ReprovacoesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], ReprovacoesService);
    return ReprovacoesService;
}());



/***/ }),

/***/ "./src/app/service/user-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDataService = (function () {
    function UserDataService() {
        this.autenticadoEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserDataService.prototype.registrar = function (user) {
        localStorage.setItem('currentuser', user);
        this.setTimeSession(user);
        this.autenticadoEmitter.emit(true);
    };
    ;
    UserDataService.prototype.logout = function () {
        localStorage.removeItem('currentuser');
        this.autenticadoEmitter.emit(false);
    };
    ;
    /**
     * Obtem usuÃ¡rio logado
     */
    UserDataService.prototype.isLogged = function () {
        return localStorage.getItem("currentuser");
    };
    /**
     * verifica se usuÃ¡rio logado tem determinada permissÃ£o
     * @param permissao
     */
    UserDataService.prototype.hasPermission = function (permissao) {
        var user = this.isLogged();
        var temPermissao = false;
        if (user) {
            var permissoes = this.permissions();
            if (permissoes) {
                permissoes.forEach(function (map) {
                    if (map == permissao) {
                        temPermissao = true;
                    }
                });
            }
        }
        return temPermissao;
    };
    UserDataService.prototype.matricula = function () {
        var user = this.isLogged();
        if (user)
            return Number(JSON.parse(user).matricula);
        return;
    };
    UserDataService.prototype.idUser = function () {
        var user = this.isLogged();
        if (user)
            return Number(JSON.parse(user).idUser);
        return;
    };
    UserDataService.prototype.nameUser = function () {
        var user = this.isLogged();
        if (user) {
            return String(JSON.parse(user).nome);
        }
        return;
    };
    /**
     * Obtem as permissÃµes do usuÃ¡rio logado
     */
    UserDataService.prototype.permissions = function () {
        var user = this.isLogged();
        if (user) {
            return JSON.parse(user).permissoes;
        }
        return;
    };
    UserDataService.prototype.getTimeSession = function () {
        var user = this.isLogged();
        if (user) {
            return JSON.parse(user).timeSession;
        }
    };
    UserDataService.prototype.setTimeSession = function (user) {
        var minutos = JSON.parse(user).timeSession;
        this.setTime(minutos);
    };
    UserDataService.prototype.setTime = function (time) {
        var dateExpiration = new Date();
        var minutos = dateExpiration.getMinutes() + time;
        dateExpiration.setMinutes(minutos);
        localStorage.setItem('expiration', "" + dateExpiration.getTime());
    };
    UserDataService.prototype.hasExpired = function () {
        if (!this.isLogged()) {
            return true;
        }
        var dateExpiration = this.getTimeExpiration();
        var now = new Date();
        return now.getTime() > dateExpiration;
    };
    UserDataService.prototype.getTimeExpiration = function () {
        return JSON.parse(localStorage.getItem("expiration"));
    };
    UserDataService.prototype.resetSession = function () {
        var minutos = this.getTimeSession();
        if (minutos) {
            this.setTime(minutos);
        }
    };
    UserDataService.prototype.lotacaoDominio = function () {
        var user = this.isLogged();
        if (user)
            return Number(JSON.parse(user).lotacaoDominio);
        return;
    };
    UserDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserDataService);
    return UserDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'http://srfapi.flem.org.br/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map