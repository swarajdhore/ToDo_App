import React from 'react'

function Dashboard() {
  return (
    <div class="navigation open">
        <div class="navigation-header">
            <div class="d-block d-xl-none">
                <a href="#" class="navigation-toggle d-block pb-3 text-danger">
                    <i class="bi bi-x-lg me-1 small"></i> Close
                </a>
            </div>
            <a href="#" class="d-flex align-items-center dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="true">
                <div class="avatar">
                    <img src="../../assets/images/avatars/3.jpg" class="rounded-circle" alt="image" />
                </div>
                <div class="flex-fill ms-3">
                    <h6 class="mb-1">Merry Stanyan</h6>
                    <div class="small text-muted">hi@merrystanyan.com</div>
                </div>
            </a>
        </div>
        <div class="navigation-body ps ps--active-y">
            <div class="collapse show" id="collapseExample2" style="">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            <i class="bi bi-person-circle"></i> Profile
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#settings">
                            <i class="bi bi-gear"></i> Settings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-question-circle"></i> Help
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-danger" href="#">
                            <i class="bi bi-box-arrow-right"></i> Logout
                        </a>
                    </li>
                </ul>
                <hr />
            </div>
            <ul class="nav flex-column mt-2">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">
                        <i class="bi bi-check-circle"></i> All Tasks
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-exclamation-square"></i> Important <span class="badge bg-warning ms-auto">5</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-calendar4"></i> Planned
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-people"></i> Assigned to You <span class="badge bg-primary ms-auto">2</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-trash"></i> Deleted
                    </a>
                </li>
            </ul>
            <hr />
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-list"></i> Today
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-list"></i> Tomorrow
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-plus"></i> Add List
                    </a>
                </li>
            </ul>
            <div class="d-block d-xl-none">
                <hr/>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-list"></i> Mobile application development
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="bi bi-list"></i> Brochure design
                        </a>
                    </li>
                </ul>
            </div>
        <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 357px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 180px;"></div></div></div>
        <div class="navigation-footer">
            <button class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#create-project">
                <i class="bi bi-plus me-1"></i> Create Project
            </button>
        </div>
    </div>
  )
}

export default Dashboard