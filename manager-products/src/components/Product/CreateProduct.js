import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { getListCategory } from "../../services/categoryService";
import { createProduct } from "../../services/productService";

function CreateProduct(props) {
    const {onReload} = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
            const fetchApi = async () => {
              const ressult = await getListCategory();
              setDataCategory(ressult);
            }
            fetchApi();
        }, []);
    

    const customStyles = {
        content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        },
    };

    const handleChange = (e) => {
        console.log(e);
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createProduct(data);
        if(result){
          setShowModal(false);
          onReload();
          Swal.fire({
              icon: "success",
              title: "Tạo mới sản phẩm thành công",
              showConfirmButton: false,
              timer: 2000
          });
        }
    };

  return (
    <>
        <button onClick={openModal}>+ Tạo sản phẩm mới</button>

        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit}>
            <table>
              <tbodt>
                <tr>
                  <td>Tiêu đề</td>
                  <td>
                    <input type="text" name="title" onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                    <td>Danh mục</td>
                    {dataCategory.length > 0 && (
                        <td>
                            <select name="category" onChange={handleChange}>
                                {dataCategory.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </td>
                    )}
                </tr>
                <tr>
                  <td>Giá</td>
                  <td>
                    <input type="text" name="price" onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Giảm giá</td>
                  <td>
                    <input type="text" name="discountPercentage" onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Số lượng còn lại</td>
                  <td>
                    <input type="text" name="stock" onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Đường dẫn ảnh</td>
                  <td>
                    <input type="text" name="thumbnail" onChange={handleChange}/>
                  </td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>
                    <textarea type="text" name="description" onChange={handleChange}></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button onclick={closeModal}>Hủy</button>
                  </td>
                  <td>
                    <input type="submit" value="Tạo mới" />
                  </td>
                </tr>
              </tbodt>
            </table>
          </form>
        </Modal>
    </>
  );
}

export default CreateProduct;
