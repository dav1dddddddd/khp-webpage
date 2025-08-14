const container = document.getElementById('carouselContainer');
const track = document.getElementById('carouselTrack');
const dateItem = document.getElementById('dateItem');

const imageUrls = [
  "https://lh3.googleusercontent.com/pw/AP1GczNL0L31ApMwkNfJQgRnzml-6gatfy2O9DbWltl90G397k7bAmtJcSy3ZK-s7gwiziwqDXNHxCtS6iq52lY45lDBBZIMZd_YW5jE6rIniZyN_0KCmr5Dild5PJKyNZAoUqVu6PxH9cgGvFcukw1Hj0-lLA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOmaKqf7-S0QME4bbn6Hn0hNsDUb644_jg3x0-vdd2pLqYpZ0n6uZMNpzBXuwsfYexaM-P72xPHfEDQnWy3RvmFzDFex7vsDd6g0sctOqKCg2r91ayOGnU0GChjIB9gqN_qSaeOSZq5Y5Xi8a_zd1wbnw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOUlmRJlfouzFyXil5xT6HWkrzCn0vaF2mJ4g_45geo_uK6CT_gkufE-vHwhTPDRhRCvG5HUQrrFyHjfBXOlGO5VpzbfY8wAqKTmM2t5QCDClZZMLTL4Fm5zDJ0X3ItYo39S4mnbN_XRnjmD2eeyviZBA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPX2CXn7wii9dMhTRoddoJekqfGAD-an5G2Z3olfCzm1jl8xglMHbXaB70lpX-Y0rWyDnvGfReo5KD6FJPxbvuGRcJSQwCD5d5hhXcEzut4UHZN9M2nMch8wK905hSGMxR_2p_I9xOCdDzPhD7b0VKSFg=w869-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP_HG7qnuO1FElTxFl_mFFDK8p4G8pylK0OMNKKVr3H8coS8w2zABW945ioIQBCXBUnMYiQ15rhow58MPWMg5zhKqnd2mULrBIxQltc2r2Ok3YDwoi71bndh-h_ppK2LhIRsbFlrseGdu19i5_IMkieDA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMpeoIAkVdFcRbt-i6WetxwPFqxjZ0TrBPmRu_1YcadXgTg6oPfzFmdmshegSInWVuxWu8ZaKC4Xt8-6026k8sWb5DlzyQA2vWhbtcIkvJFerl--d8sHsIckHof_MYPCtvqgy_sJYnUMPy2BrC5Rhq-Xg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNVit0upzZC4FLylRzd9mRSL4GRG0VdI7EZKqreO7is3EJX8UKusWSBLWD296HkkGMxYrB3lc-1ngRTRI5eKMc8lk8sK7hjljCs4FtH8ztRlgXks3mZ-1siazle9r8fVojzspOxu7gEH-GnqfdC2lLBGw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOH1Klwm6Z_UtD-X2NwP6nou_ddR90SuDLX_eScN8cqdHPwhi9OH3GqpfM4ZChHYYZuyMvFcZ2MjrhJvJpW4M5QGh2b0nPq7g4O4zrs4ceo1RBYyRi-8n0YtQ2Apc6VudxjXJyfB4-LU0ZzDaXlJJfDpA=w869-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP36zcdGgtuoQiWO4SJ6c_31uMMii0K7qCoJakAG5U82GKq4-kMgpe5GcKGCmCxxSHk_wj7CD1Xso4kQzA2PgDqziMRDbk7QGDoGvuCXER2ZBKg8ZAbWhxPotyZMNdo4YZ-lpSzCBzzvXqfG9cECvgTaQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczN11x9HHhOjzxsEDeNroNhssxg5iRI9FrZLU_Itgo5OEmAv5ShSrsSnoS1exIJ-3P7l_sezvzQLSH_HwNK58ue-IaGiCkcDqXAPKVjYz6gxq5e0GruNiNYaGLF9xfIbiVYLArSJET0pIVtjmKieVnWnqQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOkG-CR2rhF0P_AsUMmkSTXlcfFd4OOjb72M4QNCpKjI8bF4R4F_Pns-J0NN-5lAZeoi94vFiNRLA-hd-KnzFZ336wb3c3ggJ4_DgZIeUaJ-B_K-Z0AXDjx6h7P9pvuCHRx5xXkrSPev5KR4M9t7RbPzQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPKaQE0bpAE0by0ZKqAb9EGbTyGg7tFhzw34AsLd9n31VwfjHKDkGMyPHbGP5VwPCaA1JpdopmYMWxMyd719DvQnjKpsqt-43BRhyld3VZBTXsXoAsmeR3LGpPd1Crv624uV76t_bSetJzu5rrq34sp8g=w489-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOQ4yycjJOrqdl7UpLpKh4scYQgKqqkxXvk-jqe12z9vlfwvf11kL1smpZaJE2bHHu62JpA8i7BkOe1V9G3PN-kpzwUZycXXufAIXUYauU_cOq-4tRgQxo02ik6VhIg8jJAWauvK2-por3UWcIbJeedSw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMFm3keWjuA8gTGOjKNzQfqZsvWaFEwuuJiRhfOYBzloeSLocmBNPYUakkKgSZLJETwLsrtd1RG5o_c3_8-vOg0xLGtsuCpIcWqGjhpgzG4bawsbnQ9gljLP2ZzpfN2zeeX5QISvoQVbjGh7S1ONjU9Sg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPc_QBZr4i9c1u5JbRffYTSAjY1iqwY_xIlwoQqLaVCptjBBJWPKoWeI4v9JeOdTteoPUAmUmMWc4OPIbUYKhFq6WWDCg3v_72I-1cikNJOGPwmpqWsKSmYUTPvVfl78NzrNds2p45CzDKeTz30tXtrxA=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczM6LwAL96jq95nJC1CtWhOuyvJsQPZwR9ZFR96E5x2rOQ9qR0FXXHna-F4dxqwXkUhn7AxVokmYhkyBbPHhHWT6jBYydT6h5u6vblTqxBrB4A0lyU3nOm2iNCf__qhei5bQ9oDzux2X2hdEuJ-ntCh2bQ=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOEq9MmGUDo4MmndQ4t1HqERLrZjc3X304pjwEAp__OEm4pY8yb33CZLxdE28izNUJofa8kJ8Jp6nQfIRo-mnqrQ539sG1BNLV3iPNqfzMwFLYaxKlihY3GUMNhLnYRUTOri00AHVSQ7-rA89BR8NSTZw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMQF03pcv5GQ9s04MnplSdDF2x9LwRtnk0Y003U87v3P4DucLzIUA0L0G211p1UBTKye5-Xf8kdUHtg3oUnF9JuTEQv7W1GgCn9028daHJn1TDyq73fkiVEI6-ZWBfe4WagLuffGDl56cdc2l6WPYHuwQ=w489-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOUtqhnAHr8lVMM8EfEjXD-WgtXi3LMVyq4d8kvU5CcHmRzWOLXqX1OQefenbo19p9BBRdqgNIkZGR6-XczofQ6X4zwOpx6cYej1KQX3hBoSGMjDsjlM6Z1mxGdBflkxs45h24xJCkeCjY-xh3TNbj8YQ=w489-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPT66ISuM_SNR6vFCJdIXG0IPTBwShrnox9x3sFJhJGDkwO7tZCy-PUnjg7rPcZ60zQTilnGMZB4mFpvv3Dr57LKeYR5-OWXV8o95vN6V-cvSXC21Q2NotMzoiahX95v9Ek9STaptZZ0Q-ZOg-afUWOzw=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczN8lFydMKalfbT2NxGAikTLMym_XJlTGMWRqF1inWiQLJJFx7ytZY_Fai6DJCCZE-F9OvE-ZyQd7VP3kjElnFC-8AA7zXE2Zqs55Or9lEwe9xpSZ6uPvEeXXb0_WXCTzBVL1rik60Z6L_Livy7T6LB3sQ=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPxj2ZeKr6N34p462jBkdU4T4P-VynqwjRnA0A8Sanvksm4GfSonSLAfWeLTmKpUF6TDgqkns9YMe7upmNTYvtS8PWcTzS08l0a0XRgs9nbPj05Xut3CzBjXXkPYpl607Hy6V-TyVX1AhNTpr0F1PjJlw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczO_rRe2qYTny9WfzhsswITjZ2s7y2pjGMks2wuHm4I6Ocr1-hR75vymw9UUkxmdD5yPvFyUx3xuS6sTOxe7II2vG5c3WYO5vZExWJaL7wcQMv1tFGmkBZNdQCmNYrrqxqgh4BaHm1UeLH7f1arD-qQMNg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPfjqb_KbCVQ8SRde5ccwPICy2QKdmijSANLqI5g5IYUXdCIZa63-MjDCWENRXIsXB3AarrhONdCEu9nHtU4P9iqPz_ssNFycN_W7A1vaqlaOQvV8YEvp61ryjApCbDTME6Pa8-gXYNxilN-buMg5F1EA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMLab3ORqZ_7LXQ9Fp4gkAcm_KmvkgzSmeFSbeKDMzgrBNKJMjuzwZOzoInCRWTFBWxwzVra5XqC6YOfFZKkVH2ZqAL88wSg0dHskUzCksIZP4v_FnJjLbH3ufHEZ1FskDxFOC07H1bVdGOPrCauG2KXQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczM3McZB3G_4IKqkpch3M30hUsWEXqPnkLbS7iPKnYKWVXiFpsWq_FhwwS9sbAg2f24cR9RY5Acu9qU8YRhAHv8dHEH1AhxBeIOYqxfCl_lQ_th8XaNVnXjikOlqUFNfD1b4zOfIUTOiv1ZphJ28uYnRyw=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMFf5XsxTS3kJSLov_N0zQ9IX3sIUfhPLp0DvP9carbhqX2AIfbY7ec-0MRfhWPbc3iXaaa1Q8LvbqSwb-KcPq2yRpV_E98552Xc46T-IPrn5y6WdgcvTlEJhHJH2wmrNuaSQ2oHuVIoIFXmXj7gygOqg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMMoHcDdeJ5BoIRLKUYeTfryzFFpL9-E2Krd9onL_OtH-jWehb2xe9ZlDGkB2oPrSGR6ihMYLjicRSxZCgwqYuMCrl3WNFdj8NUWTl5_yCPgxZQheccj9uTy7F46Y56QO6Mhd37U-0VnzrTDl7aZ1HqSA=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczM0zOQpqUwuQIMLxZwXtbKDHr8cwXzupoUa0zTSKoukxdyNmgMW34jDz7yOLUAY7YMGEWsk129aXbKnvDe0Od0_ne2AUTJY6B2KFqO612ykJ1C7HZatq7ihuGl5Dy_mXJfBj9-AnOekHs8hvl2_J30JhA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMwuxHiYDTYqrXdPNwdqPRzCEVfMSgk3Fc2flMG9SuyPDfAl7I26hKOEbrZ43NHHTDAvthk_SMrI1J4EE8-tRp5QZwhOfriHS7-9TGlMaiPt1LMwPQdmzDfDrF84DnScrsZzzOtKygIRof99AUv-3jGEg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPHxtaoL3HBj5dhTcBTXrYTd6mPzfAGPDjPznJlsbhSTsh-uGoPPPlC8Gj6Qx_ojl8f1f9xqP6OUmITqgghx7vpomhY-oqz2AAYTXYDgUqhxqI63QrxjhidiVGdT9T2w9aGQJQtFJXtxKNUmUJaA_rewQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOlULz1xpiDBfWthRo0rErOaxCEKJSWWn0AHknezbftbWjALw3ru6_d55LUviqbBTQOxPlIwlJLtGr_sWNA0UHhsEi-q9n_T5H7jW8rOO5tAJOTXgZP4Li2ALl_khViiKaMntBZ62-lZMR17GvTNvweug=w489-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPKWQh6JnR_g2YwYgOoriHhmJp5TDJ95tZgdO3-_2Pz2bqJRpm1eAuFYlWG_Kp9P7Ta4lgxZfZtE0IHr47VjzMiAZcWt8OT_YYpm6oS2_ohmxYhRV3YJ8r6zOaf1uqpnVYNJDXpHtCGRQL7KqqPSr9uGw=w489-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNsjcFRzWK_u7YcHtJN9dZsXxfE-mLhrY1pMcCBQEUViHdsjOKCANguE2QAMWjMqEmd1QQ2NoAzf85i4_tJzAockqulhbz0sQJlare8Sa-o_OX998M4x1M_Iqw3APoQ2nrcoIbxSoVOx8SCRoHgmkXpUg=w489-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczN-OdmKQvhrSn4RM_-lDGT2JCRMwoyRRWrIv2mngpdaQJcFzuEyA-bvCKSHWIsvOb0UncU7JKdJMy33ENFADJ03qMfsODGkJMeF2kY9rRHu2RMx9Dzk9p0TbVEmp-_0GPOjQiB60Th_H1Jom7QCqTSGpQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOatmngODlZwh96ASrXuvTh2tTmhqo5qc-guVSygBPSViHbdMDHTq6jgEuJXYs5pjv5LcSkL5B9Fc8EoWl-HN_fVzdu3yCXwGCnvV8s5GHIpFvcQ0oitlWqHYi1RIKRTJMXCQUjnvK4xolYhdA1hwCXlQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP81TtoD_4TU7X9jXy7l9tz-VmyN1F-Gujs8vyZRGAhaDdZemaDDx0p0OW8OJ0ay0hsO-tqdbZ8akCXxe0SPZ1PO2ygjtRm0FyP0IDX5VcmEWDqQ6MJYmxJGd-_hNySWJowgYR9n9b7JDHKznjPflmv1g=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczO2klBGGUdQPh0GEqAGTLJ0sb18BNCa_xx8u5xAJqLCm9OUSv5BjpPM4K4_JcBT3gBOsPNYveEcsQQ4KBtl3aBdB0-fHluRtf5foCDqGZaSL3Zc-BOj9ZbPfKq71jV8lz_SiIp1iQ1V2Sc5YjAIXB6rLQ=w489-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP36amr2hwSyE4DsTJDSB829y8O4R3g6hZ-ZLUVA2S8UDHJ7A7l7Y7sVpX0FvZ8hZA3vclNqw5FW5bSFZaVjhqV8nw7Hbyzk4toFd6gGIe2a0TsQx2N-Mzui2QXyNGzCH7jaoMwdigqd1lbPT9S8rfLvA=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNznaCx451fvWKdDp8LYN58CFpwpCi_ZbMEUfe8fSY0q6EFwBe78H_jNSgMotyFsPR9F8J-X0VZuPNv4Ms82o0dzNVdjm28g1xp8RVWkr1htCLegnTbxlCgDsQd5rERLJFsjugfqpOJnnui87GhHPIPCA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOSPpegfeaEKnzof-jlvXbkh629ns-ZEt81Owa7or-3jcb216EmQMZy-hmmiAljGnS5AfNDM5fQNkcgtjGtHdELLotpRMAt2eYArwLlVoWmX9YPZW9v-RqNlxRoEZRJRAN5S0rvlY_sDZW5s_a6b7pBWA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMY13uNpMpE4rxfssUEZkD1gq1w3hCPJ-LADebaki8O7A6nodVIT0nBER6EvI6uY51HF7dB1VkKObhvOmAwAP_UtfIgTToB_0mLDr1KP9k5Vh8A7Y7aArTwSAaEnqmGcqFruJYiBmnigzvT4RsJtBsq2A=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOhx410uj8gw5Y2vdz-_UTSkn-jzrYl1cNWnCvdUvG6pe5lbAHhLvwzX0ruWpwE64CFnhwglGute_Fq9Md1AGLbd0Aw1wHFpRDgZF5Mfdv9UW4Od4jyBiqvtRFk0o24AfU4BDIuYSU_QJkjftVhjiQVWQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczM-5H67LrW6nHlDZAf30V8n8iegiAqfiZU9_6JfbTUdW9sKD2PQWuJKNp29M7eKSWycWxMjEPWRsV5zvCw-Ig90UVq-XsI62O2zx6GseINn_IBOdccT_V1ywt3BpFdghy3QNYvrbO7kqS_NBmzGaj6KJg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczN9IaaTbwLmumetNkAsvXHnWpNnhTuuZMQdy_GeLYftmiDEglNtA5kEy5HtKex79GYTjzVdOm-XUCgvVLnRHNLFBAUafRMTp3nkuJuTRsucMtBW3Eg6hOenkEhqUyKK8s7XD0WlMFk2bTqeOK88_PgA7A=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNk93txDM0cpskR-FpTn4rgL8SjpaEaVBkvVJGvm2P0Ku7FxUxPfKx3XMBbm6MQvLzXopDD7ge4Bs13pfBYqjgeqyUhays7i7DekSHW6kXwJ2fYSueAOJs9X4tqegGOfGQJY6skj3zjDwkVItNtQ6x4gw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOWfP0Dwwa5ec4t3D6ASusS15n7nd-HeVzRR2mFM_rYwYJm7mtWp73_u1KXAGIsFU_SessyWDjResHF9YUkLu8cZpiVTujSmWKSfr7FhReZ307t_uawKbJ7L29gSU8VI4TvSoJ1l1aXMqWWlZhprx89rw=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNXRUaEyDV6uqEy0nHbsPolAxDph04NsL1gD8C_ywAdk_pgV0nWJ1MezIiwBVkocAcf0_Ogp4tmuF67nbsCivIg1bwqgIOh92ED1CXVA7NeiBAxsdUU6SznobQ-CXAQWktSYtSmT8m2UI2alDwZygm8Pw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNWUgDOk3NlzqXWpcBvEQZCTKF5BvTLZLCe6V3HGfXFWsj4ODI4yVKfZhMvVv61FXY1vaOdKTpqFYMpTUDBQ2Zpl1FPlJ0suw_UUkdWypMsJCsv9vj7OUMznUTbC0heX8DHuly3LDcxswWC_fRKpoLYag=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP9Z-37P-JsPIqk-na-34aibbUtZesxuyRn8YO4zCL0ydz5cdRnUltRkGM7CfZNO3h6p8RTMVRccGU_QEunKtpz0SCPB0hPLUwH4uSIF-xKLipGZtV847eRXdbgJcZlWo-i1zmMX7HlHW3nJZRQwlhz8Q=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNRFis1hey8WmeyQWghbfQU-kLK8QYocyULE1glC1YB9p07icgqKWIWxquvgjr7jbg-r6qnPoARaZgHJwXmk6eqGit8Obk6CvA7liLtYPJ2uRDCgYArFEBEFrt3M30GNxhDtKQZ7qPCKygPVcEJ_rAJjg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczM5QLPpGCezK391UlwIZh5ERiFjV945HQ6Y5gxQJgBwJOiSTyMEdQd2qlM___9hgTa_QFmx_86q7lN9U7rhy8SmptwGtwrpRPIzBDUO1C9mQfERWv4HgtvEH6HqBMuj9gOoKy3KvVJmsSOjJseeXU743Q=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNfB0oXQrkx__t9cZr3aF6pWXF6ETgMZ8Ep3p57Mndu9OIjSHx-6nWxxRf2U4odn9H0-waKBvlAZuLNx1GZKO08aL5dnX_r63_R7elvv-ZPLGVDeC5k1gYpY0Pa6nVlc55Iv7Z645AA4d60mRyDGIqStg=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMjWzStEaT9IzlZnlem75OLlm42WPkj069IqkxGnadXIUx1cIc4-LuCbEmgS_hyTqrxBE10eUdJETXghqRoTgRobMQY4rJCYLFWMCpySMeTpp71RZxB57nLsyFhF-hSS84W6UQYEp5wOymS4B_z2z4ABQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMxWZHIzAr_A2qa_VqRU60QXJzy8EBOIKvm6hFfIcWdEzh5YnjGnsZFcOk8iUAfxGNygyk1MqtygraKzRkpLIg8ZKvIMhc0kK0w0Szov0qP1qN9vEOQoyeqRy3-HGpvIm4xKtCJ130ijHlk7HHvk_YNKA=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPZDdizNXInPp7N9Zla9zvXMYYhi_UhicYbAhruguKorWKloR8haElag8qSruLhVj_GBSFV4BZ9tNyX0H_cYwXubyl6L0qJstzahkGpl98v1bVvcCQcyXL7FwaRxOSaGTkNKR5EIJ1foIFy-ceafl5D7Q=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMw_0QDVcZTwgMpfIx8EnjvBf0flbDY2v1A_-S4GIqvDO9cB5oARre67tVSmzSKP6axLPE-wyN9xy-ICyp997lAYHAU2nawg03T7JSx6ogKggqyWhmyD4N3DYk-vzMAzXlUVkmZ8iACprma4NHGvipcYw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPXdO1qnc8OZiHPShLaf4Jt95KcBBPDrxzVJwZXrHDP0Fa86aTsyqmnVvG6WA52x61iE5mCtCsgn4WwuGQuXbXmQUjx48yYUGqX4u4rYEvVjizKnGOe4AwIsGkSyTW_MY4LmEHcLy8OFMUyZ4-TGuxrdQ=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNt6qLAoMTqyz91oD7qV-f-6wAhj0A9PjlVx54vXd5UAt6CTSb9AmqVZt0zCtfVY0S98PFdMahE_sbmvTQxTBzHR2lWBVN9qmkmlSSkmcCGe22AOPWmDo84RP-Yj1cqEg0r3xbjJ0ew9AquElFomakPIw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPOz4hgOd4M155m6_WuopcAcB-1QQfsEPjT-x2wi5KCP0O55m7A4q7iM0WvLwqZl1kwIzxRsKeUWhSHYHc8IicQgRwR5gMfo1IoLhLc4fPZ-uUq4t27b2pcDkWWGlUmXU-hsozRo8J-ePkh-O60OdMAyw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPU97HW1lA2mdbyhQft0hlyw8OzPMQnRGZ6Lmp0t7LhSTBuwmnPYzcna4_aDXGkPij8MEyI77I6NnjmfixTk2Z-tRIGOlZpRRWsXI6hSzCC7tOGaEm2nay4YVAHfpyhP44FSGweR6G26bbSy9HFWj4VWA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMj44c9pCL4LLW9a_Nbk0A_PJaR-1VeADtFHLZsEwn0I0OOb7g2HxAf-_9ZzQ1BKnIX7QHujKTElg8mhlMQIvpmU5g0deA9A2OH7Ia-H6MUEaVVfEVIvy53GdpDq2T0Zu2alpEuiKIEK8b7GU0CMv1Yog=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNchrim5XMF2b9SzqTO9K0BKxOyshyadYy6f29Q2m_Sb5ZDZj2CdEnT7JN8Ly3sb591EA-p8Dt7cjLVMw1d2NLhwegNzIE_4JCQz_qBnFXQRiZ0SVFr3cySiDjCuQL43OcPR2FrIKLuCxnhN_E7WaJH8w=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOfCxvwoHzzyv1d_0PkMOtU8G1DQK-g3L4rv4O7nwJQDsIxnDq5gJUu9Hz0yXWFL0LfoVqIjwzzVIujx4VGBBAB8EiWoM-ZP3ZaXTylM2NQ5OyB46OybkxyW9oC4_3SZZ-V2PJFKUcf31TO-DDl8wL7ZA=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNCEbEYgDJibVaBmnFXCzpV8tXrJj5fbuwqs7lRFEm94DtA5tGiB2ma3UWKe3JrmPgWelMmOT23mYJOj9OoH4aFP84BSmbYW-JBs87tlBTu-KViFL9CfgV5mois6lF3yFRl8QCgCq-kK5xHHMSTUCcbAA=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNEJ50VYio1Ky9B61KuUqVcVf2rbkWSCYRXCoBekG7kAVvNpl3r0L91jUt8z5RjxrBuQoSaiZHXPCl3rQKFUsPKLsIUDgCB-pgaHadmKqRxAYtK1xGkYN0En3_JttWyu7w08cNhf_3fC1skAgjOX1PMog=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczORhO3gieuwpp39kWHh_G-2NBP-3L6KZVPwFo1MkF6A0_Tc5sQIoT6fT_TIMhJyrNcZ5NoFSLGfWUnUt7Vg1hXx5SxYAHRwKObCnQBbEuuyuvzH_H7oHpL0Wmg1qj0_KeKbFAi3xXvnj0gtbofBDbP2NQ=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP5dDcytz0LvdOavW22cTSdbTcgFsQMnl3Px4y94MGdMwags6M9EfsV27OkKatDr195ep3nQNE1m2iggf50S5RwsZ7l7VgLmxdcU6y7J26eY3i6UiLt6oUnHIGutyGQa3eNeQarjXNLTmp2szmEMPFxpA=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczOVS5N_MMhMIu97c4-_R3ui-QwDGdq0Fvh46oVSmeemTGGksxKmHRNuopFUc-N9wZI754lBZiVjvNkiTf2vNCKkbl3ieIb5307GG1hZsTGsYAqVOiQjsLXQBZifliPHgRCA4elDhgd72Ivzh46EInZoGw=w651-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPB9zO7VhVVurxc05l8FAUeinQUJrZVahff9jKc6fEWyUeVDB0dNaZWhdXXKw-D3zm7BanuVHV0LSqBKUf1c77kFpVdVoMhelCeCxhdI4gDNVGJ454IbpvCEfSa72ybwfV2u_uwOtApaAh8xeWRLQ8jfQ=w1159-h869-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNu1OIFLbBGk_hSVZB2dbKjRvx1XMelM8_pGf22DUmXNfvJZ69qS3tgr_IqGKrrjFaUUHTDkoo8zX9jNLDe8y5FqMMn1aBjfXrjEFbPlZ4d1CM4-TfPUHzIGQUvEXSkM5NgCejolhqqFWak59hhvUND3g=w1159-h869-s-no-gm?authuser=0"
];

const dates = [
  "DEC 1, 2022",
  "14 Feb 2024",
  "JAN 20, 2023",
  "NOV 21, 2022",
  "DEC 5, 2022",
  "DEC 15, 2022",
  "DEC 6, 2022",
  "OCT 31, 2022",
  "JAN 14, 2023",
  "JAN 14, 2023",
  "JAN 31, 2023",
  "FEB 4, 2023",
  "FEB 4, 2023",
  "FEB 4, 2023",
  "FEB 10, 2023",
  "FEB 22, 2023",
  "FEB 26, 2023",
  "MAR 2, 2023",
  "MAR 2, 2023",
  "MAR 16, 2023",
  "MAR 16, 2023",
  "MAR 17, 2023",
  "MAR 25, 2023",
  "MAR 29, 2023",
  "APR 30, 2023",
  "JUL 4, 2023",
  "JUL 29, 2023",
  "AUG 1, 2023",
  "SEP 5, 2023",
  "OCT 24, 2023",
  "DEC 7, 2023",
  "DEC 9, 2023",
  "DEC 14, 2023",
  "DEC 14, 2023",
  "JAN 16, 2024",
  "FEB 22, 2024",
  "FEB 27, 2024",
  "APR 3, 2024",
  "APR 4, 2024",
  "MAY 7, 2024",
  "MAY 11, 2024",
  "AUG 2, 2024",
  "AUG 18, 2024",
  "AUG 25, 2024",
  "OCT 19, 2024",
  "OCT 25, 2024",
  "NOV 9, 2024",
  "NOV 24, 2024",
  "DEC 15, 2024",
  "JAN 7, 2025",
  "FEB 4, 2025",
  "FEB 15, 2025",
  "FEB 15, 2025",
  "MAY 7, 2025",
  "JUL 20, 2025",
  "JUL 24, 2025",
  "JUL 27, 2025",
  "JUL 28, 2025",
  "JUL 28, 2025",
  "JUL 28, 2025",
  "JUL 28, 2025",
  "JUL 28, 2025",
  "JUL 29, 2025",
  "JUL 29, 2025",
  "JUL 29, 2025",
  "JUL 30, 2025",
  "JUL 30, 2025",
  "JUL 30, 2025",
  "JUL 30, 2025",
  "JUL 30, 2025",
  "JUL 30, 2025",
  "JUL 30, 2025" // Added missing date to match the 67th image
];

let currentIndex = 0;
let scrollLock = false;
let accumulatedDelta = 0;
const scrollThreshold = 50;

const dateParagraph = document.querySelector('.date-item p');

function generateCarouselItems() {
  track.innerHTML = '';
  
  imageUrls.forEach((url, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item';
    
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Image ${index + 1}`;
    
    carouselItem.appendChild(img);
    track.appendChild(carouselItem);
  });
}

generateCarouselItems();

const items = document.querySelectorAll('.carousel-item');

function getItemHeight() {
  return items[0].offsetHeight;
}

function animateDateChange(newDate) {
  dateParagraph.style.transform = 'translateY(-20px)';
  dateParagraph.style.opacity = '0';
  dateParagraph.style.fontFamily = 'HandwritingFont';

  setTimeout(() => {
    dateParagraph.textContent = newDate;
    dateParagraph.style.color = '#fff';
    dateParagraph.style.transition = 'none';
    dateParagraph.style.transform = 'translateY(20px)';
    dateParagraph.style.opacity = '0';

    void dateParagraph.offsetWidth;

    dateParagraph.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
    dateParagraph.style.transform = 'translateY(0)';
    dateParagraph.style.opacity = '1';
  }, 400);
}

function scrollToIndex(index) {
  // Ensure we don't go beyond the available dates
  if (index >= dates.length) {
    console.warn(`No date available for index ${index}`);
    return;
  }
  
  const offset = getItemHeight() * index;
  track.style.transform = `translateY(-${offset}px)`;

  animateDateChange(dates[index]);

  scrollLock = true;
  setTimeout(() => {
    scrollLock = false;
    accumulatedDelta = 0;
  }, 500);
}

container.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (scrollLock) return;

  accumulatedDelta += e.deltaY;

  if (accumulatedDelta > scrollThreshold && currentIndex < items.length - 1) {
    currentIndex++;
    scrollToIndex(currentIndex);
  } else if (accumulatedDelta < -scrollThreshold && currentIndex > 0) {
    currentIndex--;
    scrollToIndex(currentIndex);
  }
}, { passive: false });

document.getElementById('btnUp').addEventListener('click', () => {
  if (scrollLock || currentIndex === 0) return;
  currentIndex--;
  scrollToIndex(currentIndex);
});

document.getElementById('btnDown').addEventListener('click', () => {
  if (scrollLock || currentIndex === items.length - 1) return;
  currentIndex++;
  scrollToIndex(currentIndex);
});
