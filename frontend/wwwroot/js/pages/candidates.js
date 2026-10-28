'use strict';

// DOM Ready Handler
document.addEventListener('DOMContentLoaded', function () {
  // Initialize Variables
  const candidatesTable = document.querySelector('#candidatesTable');
  const addCandidateForm = document.querySelector('#addCandidateForm');
  const editCandidateForm = document.querySelector('#editCandidateForm');
  const editModal = document.querySelector('#editCandidateModal');

  // Initialize DataTable
  let dtCandidates = $(candidatesTable).DataTable({
    ajax: '/api/candidates', // Your API endpoint
    columns: [
      { data: 'uuid', title: 'UUID' },
      { data: 'id', visible: false },
      {
        data: 'photo',
        render: function (data) {
          return `<img src="${data}" class="rounded" width="40" height="40">`;
        }
      },
      { data: 'name' },
      { data: 'party' },
      { data: 'age' },
      { data: 'description' },
      {
        data: null,
        render: function (data) {
          return `
                        <div class="d-inline-block">
                            <button class="btn btn-sm btn-icon btn-text-secondary rounded-pill btn-edit" 
                                    data-id="${data.id}">
                                <i class="ti ti-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-icon btn-text-danger rounded-pill btn-delete" 
                                    data-id="${data.id}">
                                <i class="ti ti-trash"></i>
                            </button>
                        </div>`;
        }
      }
    ],
    order: [[1, 'asc']], // Sort by UUID by default
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/de-DE.json'
    }
  });

  // Initialize Dropzones
  let photoDropzone = new Dropzone("#candidatePhoto", {
    url: "/api/upload",
    maxFilesize: 2,
    acceptedFiles: "image/*",
    maxFiles: 1
  });

  let editPhotoDropzone = new Dropzone("#editCandidatePhoto", {
    url: "/api/upload",
    maxFilesize: 2,
    acceptedFiles: "image/*",
    maxFiles: 1
  });

  // Event Handlers
  if (addCandidateForm) {
    addCandidateForm.addEventListener('submit', handleAddSubmit);
  }

  if (editCandidateForm) {
    editCandidateForm.addEventListener('submit', handleEditSubmit);
  }

  if (candidatesTable) {
    candidatesTable.addEventListener('click', handleTableActions);
  }

  // Form Submit Handlers
  async function handleAddSubmit(e) {
    e.preventDefault();
    try {
      // Add form submission logic here
      const formData = new FormData(e.target);
      // API call to add candidate
      await addCandidate(formData);
      dtCandidates.ajax.reload();
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    try {
      // Edit form submission logic here
      const formData = new FormData(e.target);
      // API call to update candidate
      await updateCandidate(formData);
      dtCandidates.ajax.reload();
      $(editModal).modal('hide');
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  }

  // Table Action Handler
  function handleTableActions(e) {
    const target = e.target.closest('button');
    if (!target) return;

    const id = target.dataset.id;

    if (target.classList.contains('btn-edit')) {
      handleEdit(id);
    } else if (target.classList.contains('btn-delete')) {
      handleDelete(id);
    }
  }

  // CRUD Operations
  async function addCandidate(formData) {
    try {
      const response = await fetch('/api/candidates', {
        method: 'POST',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Failed to add candidate');
      }
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  async function updateCandidate(formData) {
    try {
      const response = await fetch(`/api/candidates/${formData.get('id')}`, {
        method: 'PUT',
        body: formData
      });
      if (!response.ok) {
        throw new Error('Failed to update candidate');
      }
    } catch (error) {
      console.error('Error updating candidate:', error);
    }
  }

  async function deleteCandidate(id) {
    try {
      const response = await fetch(`/api/candidates/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete candidate');
      }
    } catch (error) {
      console.error('Error deleting candidate:', error);
    }
  }

  async function handleEdit(id) {
    try {
      // Load candidate data
      const candidate = await fetchCandidateById(id);
      // Fill form
      fillEditForm(candidate);
      // Show modal
      $(editModal).modal('show');
    } catch (error) {
      console.error('Error loading candidate:', error);
    }
  }

  async function handleDelete(id) {
    if (confirm('Möchten Sie diesen Kandidaten wirklich löschen?')) {
      try {
        await deleteCandidate(id);
        dtCandidates.ajax.reload();
      } catch (error) {
        console.error('Error deleting candidate:', error);
      }
    }
  }

  // Helper Functions
  async function fetchCandidateById(id) {
    // Implement API call
  }

  function fillEditForm(candidate) {
    // Fill form fields with candidate data
  }
});
