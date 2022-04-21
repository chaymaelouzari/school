// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let App = {
    Core: {
        CreateTable: function(id) {
            $("#" + id).DataTable({
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/1.10.19/i18n/Spanish.json"
                }
            });
        },
    Data: {},
    Page: {
        Estudiantes: {
            List: {
                OnLoad: function() {
                    App.Core.CreateTable("estudiantes");
                }
            },
        },
    },
}
}