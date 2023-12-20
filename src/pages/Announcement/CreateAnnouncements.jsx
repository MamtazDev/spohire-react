import { useRef, useState } from "react";
import brows from "../../assets/brows.png";
import { useAddAnnouncementMutation } from "../../features/announcement/announcementApi";
import { useNavigate } from "react-router-dom";

const CreateAnnouncements = () => {
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const [addAnnouncement, { isLoading }] = useAddAnnouncementMutation();
  const [loading, setLoading] = useState(false);

  const [imageTitle, setImageTitle] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];

    setImageTitle(selectedFile.name);
    setImageFile(selectedFile);
  };

  const [status, setStatus] = useState("In Progress");

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUpdateClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const title = form.title.value;
    const location = form.location.value;
    const budget = Number(form.budget.value);
    const description = form.description.value;

    const fromData = new FormData();
    fromData.append("image", imageFile);
    fromData.append("title", title);
    fromData.append("location", location);
    fromData.append("budget", budget);
    fromData.append("description", description);
    fromData.append("status", status);

    try {
      const response = await addAnnouncement(fromData);

      if (response?.data?.success) {
        form.reset();

        navigate("/dashboard/announcements");
        setLoading(false);
      }
      if (response?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${response?.error?.data?.message}`,
        });
        setLoading(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="editAnnouncement_wrapper">
          <div>
            <h3>Create Announcement</h3>
          </div>
          <form action="" onSubmit={handleUpdateClick}>
            <div className="row mt_30 mb_56">
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    hytmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Announcement Title"
                    name="title"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    hytmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Status
                  </label>
                  <div className="status_buttons">
                    <button
                      onClick={() => setStatus("In Progress")}
                      className={
                        status === "In Progress" ? "active_status" : ""
                      }
                      type="button"
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => setStatus("Completed")}
                      className={status === "Completed" ? "active_status" : ""}
                      type="button"
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => setStatus("Denied")}
                      className={status === "Denied" ? "active_status" : ""}
                      type="button"
                    >
                      Denied
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    hytmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Vegas street circuit"
                    name="location"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    hytmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Budget
                  </label>
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text input_budget"
                      id="basic-addon1"
                    >
                      $
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="500"
                      aria-label="Budget"
                      aria-describedby="basic-addon1"
                      required
                      name="budget"
                      min="1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <label
                  hytmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Image
                </label>

                <div class="input-group mb-3 ">
                  <input
                    onClick={handleUploadButtonClick}
                    type="text"
                    class="form-control position-relative ps-5"
                    value={imageTitle ? imageTitle : ""}
                    placeholder="Browse file"
                    id="inputGroupFile02"
                  />
                  <div className="form_icons">
                    <img
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                      }}
                      src={brows}
                      alt=""
                    />
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                    accept=".jpg, .jpeg, .png, image/jpg, image/jpeg, image/png"
                    required
                  />
                  <label
                    class="input-group-text"
                    for=""
                    onClick={handleUploadButtonClick}
                  >
                    Upload
                  </label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <label
                    hytmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Description
                  </label>
                  <div class="input-group mb-3">
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="We can't wait to share this milestone with our incredible sports community."
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                      name="description"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="update_btn1"
                type="submit"
                disabled={loading || isLoading || !imageFile}
              >
                {loading ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAnnouncements;
