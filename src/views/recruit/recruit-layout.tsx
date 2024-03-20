import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { SelectedTestIdSelector } from 'src/modules/test/testStore';
import { AppThunkDispatch, RootState } from 'src/modules';
import { FetchRecruitData } from 'src/modules/recruit/thunk';

import MainLayout from 'src/layout/MainLayout'
import RecruitSearchBar from './components/RecruitSearchBar';

import { RecruitCardProps } from './components/RecruitCard';
import RecruitCard from './components/RecruitCard';
import Pagination from './components/Pagination';

import AltaSoftwareLogo from '../../shared/assets/images/alta-software-logo.svg';
import AltaPlasticLogo from '../../shared/assets/images/alta-plastic-logo.svg';
import AltaMediaLogo from '../../shared/assets/images/alta-media-logo.svg';
import UnigonsLogo from '../../shared/assets/images/unigons-logo.svg';
import AltaGroupLogo from '../../shared/assets/images/alta-group-logo.svg';
import NotFoundBanner from '../../shared/assets/images/not-found-banner.svg';
import { ReactSVG } from 'react-svg';

import app from 'src/firebase';
import { db } from 'src/firebase';
import { addDoc, collection } from 'firebase/firestore';


interface HeaderItem {
    icon: string;
    label: string;
    url: string;
};

interface RecruitLayoutProps{
    headerItems: HeaderItem[];
    notFound?: boolean;
};


const RecruitLayout: React.FC<RecruitLayoutProps> = ({headerItems, notFound}) => {
    const dispatch = useDispatch<AppThunkDispatch>();
    const recruitData = useSelector((state: RootState) => state.recruit.recruitData);
    const status = useSelector((state: RootState) => state.recruit.status);
    const error = useSelector((state: RootState) => state.recruit.error);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRecruitItems = recruitData.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const paginate = (pageNumber: any) => {
        if (pageNumber != "...") {
          setCurrentPage(pageNumber);
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        // Gọi hàm addRecruitAndFetchData để fetch dữ liệu từ Firestore
        dispatch(FetchRecruitData());
    }, [dispatch]);

    // const UploadData = () => {
    //     const randomRecruits = [];
    //     for (let i = 0; i < 100; i++) {
    //         const randomIndex = Math.floor(Math.random() * recruitCardProps.length);
    //         randomRecruits.push(recruitCardProps[randomIndex]);
    //     }
    //     const recruitCollectionRef = collection(db, 'recruit');

    //     // Lặp qua từng mục trong mảng và thêm chúng vào Firestore
    //     randomRecruits.forEach(async (recruit) => {
    //         try {
    //             const docRef = await addDoc(recruitCollectionRef, recruit);
    //             console.log('Document written with ID: ', docRef.id);
    //         } catch (error) {
    //             console.error('Error adding document: ', error);
    //         }
    //     });
    // }

    return (
        <MainLayout selectedItem={1} showUserMenu={false} headerItems={headerItems}>
            <div className="recruit">
                <RecruitSearchBar/>
                <div className="recruit__title">
                    {'TÌM '} 
                    <span>CÔNG VIỆC MƠ ƯỚC</span>
                    {' CỦA BẠN'} <br/>TẠI NGÔI NHÀ MỚI
                    {
                        notFound ? (
                            <div className="recruit__title__sub">
                                Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm để tận dụng tối đa tìm kiếm của bạn
                            </div>
                        ) : null
                    }
                </div>
                
                {
                    !notFound ? (
                        <div className='recruit__recruit-cards-wrapper'>
                            <div className="recruit__recruit-cards">
                                {currentRecruitItems.map((props: RecruitCardProps, index: number) => (
                                    <RecruitCard props={props} key={index}/>
                                ))}
                            </div>
                            <Pagination 
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                totalItems={recruitData.length}
                                paginate={paginate}
                            />
                        </div>
                    ) : (
                        <div className='recruit__not-found-banner'>
                            <ReactSVG src={NotFoundBanner}/>
                        </div>
                    )
                }
                
            </div>
        </MainLayout>
    );
}

export default RecruitLayout;